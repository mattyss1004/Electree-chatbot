"""
Reads the original electree_chatbot.jsx and produces client/src/App.jsx
with callClaude replaced by callAPI (pointing to our secure backend).
"""

with open("/home/ubuntu/upload/electree_chatbot.jsx", "r") as f:
    original = f.read()

# Replace the callClaude function with callAPI that hits our backend
old_func = """async function callClaude(system, messages, maxTokens=1000){
  const res=await fetch("https://api.anthropic.com/v1/messages",{
    method:"POST",headers:{"Content-Type":"application/json"},
    body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:maxTokens,system,messages})
  });
  const data=await res.json();
  return data.content?.map(b=>b.text||"").join("")||"";
}"""

new_func = """async function callAPI(system, messages, maxTokens=1000){
  const res=await fetch("/api/chat",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({system,messages,maxTokens})
  });
  const data=await res.json();
  if(data.error) throw new Error(data.error);
  return data.content||"";
}

async function callRouter(system, message){
  const res=await fetch("/api/route",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({system,message})
  });
  const data=await res.json();
  if(data.error) throw new Error(data.error);
  return data.content||"";
}"""

result = original.replace(old_func, new_func)

# Replace callClaude usages with callAPI / callRouter
result = result.replace(
    "const rr=await callClaude(ROUTER_PROMPT,[{role:\"user\",content:text}],200);",
    "const rr=await callRouter(ROUTER_PROMPT,text);"
)
result = result.replace(
    "const reply=await callClaude(buildSystem(nets,ctx),history,1000);",
    "const reply=await callAPI(buildSystem(nets,ctx),history,1000);"
)

# Add import for useState, useRef, useEffect, useCallback if not present
# (already present in original)

with open("/home/ubuntu/electree-chatbot/client/src/App.jsx", "w") as f:
    f.write(result)

print("App.jsx written successfully")
print(f"Original length: {len(original)}, New length: {len(result)}")

# Verify replacements
if "api.anthropic.com" in result:
    print("WARNING: anthropic URL still present!")
else:
    print("OK: No anthropic URL in output")

if "/api/chat" in result:
    print("OK: /api/chat endpoint present")

if "/api/route" in result:
    print("OK: /api/route endpoint present")
