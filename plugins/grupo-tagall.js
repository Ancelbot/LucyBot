var handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command, usedPrefix }) => {

if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*@ancelzzz:* ${pesan}`
let teks = `*𝑳𝑶𝑺 𝑰𝑵𝑽𝑶𝑪𝑶𝑶𝑶 𝑮𝑨𝑨𝑨𝑨🏴‍☠️*\n*│*\n*- ̗̀  Iᥒ𝗍ᥱgrᥲᥒ𝗍ᥱs🏴‍☠️*  ${oi}\n\n`
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
for (let username of participants) {
teks += `*│➭* @${username.id.split('@')[0]}\n`}
teks += `*𝕵𝖔𝖘𝖘🏴‍☠️*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )

}
handler.help = ['tagall']
handler.tags = ['grupo']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
//handler.botAdmin = true
handler.admin = true
handler.group = true

export default handler
