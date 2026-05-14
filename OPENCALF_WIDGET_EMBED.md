# OpenCalf web chat widget — embed guide

Use this document as a handoff prompt for your AI coding assistant (Cursor, Copilot, ChatGPT, etc.).

Ask it to add the OpenCalf web chat widget to your site or app **without changing the snippet structure**.

## Checklist for the AI

- Paste the HTML exactly as provided (two script tags: config + `opencalf.js`).
- Place the snippet before `</body>` on each page that should show the widget.
- Do not rename `window.OpenCalfConfig` or merge scripts in a way that breaks load order.
- Launcher defaults to a bottom-corner FAB on the same side as `panelSide` (`right` = bottom-right). Change `panelSide` / `launcherMode` in the dashboard if needed.
- If `greeting` is omitted from the config object, the widget shows two default assistant lines (language follows `primaryLanguage` in the snippet, usually from the agent).
- If the chat fails to load, verify `apiBase` / script URL match your deployed API and CORS (`WIDGET_ALLOWED_ORIGINS` / deploy docs).

---

### Embed snippet (use as-is)

```html
<script>
  window.OpenCalfConfig = {"agentId":"6469696b-0802-4e11-9374-02a1d6d2f072","apiBase":"https://api.achain.site/api/v1","primaryColor":"#2563eb","title":"OpenCalf Support","layout":"side-panel","panelSide":"right","voiceEnabled":false,"showVoiceButton":true,"textChatEnabled":true,"avatarInitial":"O","sttBackend":"web_builtin","ttsBackend":"web_builtin","primaryLanguage":"en","launcherMode":"fab"};
</script>
<script src="https://api.achain.site/widget/opencalf.js" defer></script>
```

For your own deployment, update `agentId`, `apiBase`, and the widget script `src` together; keep the two-tag structure and load order.
