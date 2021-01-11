let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: HITMAN FF
╠➥ Script: @HITMAN-BOT
║
╠➥ Instagram: @ff.hitmamff
╠➥ YouTube: HITMAM FF
║
╠═〘 Thanks To 〙 ═
╠➥ Mikasa
╠➥ Hitman ff
╠➥ Eren
╠➥ Hitman-bot
║
╠═〘 DONASI 〙 ═
╠➥ SmartFren: -
╠➥ Tsel: 0821-5548-3269
╠➥ Tsel: 0821-5548-3269
║
║>Request? Wa.me/6282155483269
║
╠═〘 HITMAN BOT 〙 ═
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

