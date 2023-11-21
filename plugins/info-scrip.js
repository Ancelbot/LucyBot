let handler = async (m, { conn, usedPrefix }) => {
let git = '*乂  INSTAGRAM SC 乂*\nhttps://www.instagram.com/wtf.lcy/'
await conn.sendUrl(m.chat, git, m, { externalAdReply: { mediaType: 1, renderLargerThumbnail: true, thumbnail: imagen2, thumbnailUrl: imagen1, title: '\t\t\t\t\t\t᭡͡ᩬ🍧✩̣̣̣̣̣ͯ𝕵𝖔𝖘𝖘 𝕭𝖔𝖙🏴‍☠️᭡͡ᩬ🍧✩̣̣̣̣̣ͯ', }})
 
}
handler.tags =['info'] 
handler.help = ['script'] 
handler.command = ['sc', 'script', 'codigo', 'git', 'github'] 
handler.register = true 
export default handler
