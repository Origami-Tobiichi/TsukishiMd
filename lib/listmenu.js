const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

▰▰▰『 Owner Menu 』▰▰▰
❑➫${prefix}self 🅞
❑➫${prefix}public 🅞
❑➫${prefix}join 🅞
❑➫${prefix}bctext 🅞
❑➫${prefix}bcimage 🅞
❑➫${prefix}bcvideo 🅞
❑➫${prefix}creategc 🅞
❑➫${prefix}setexif 🅞
❑➫${prefix}shutdown 🅞
❑➫${prefix}autostickergc 🅞
❑➫${prefix}setppbot 🅞
❑➫${prefix}addprem 🅞
❑➫${prefix}delprem 🅞
❑➫${prefix}addowner 🅞
❑➫${prefix}delowner 🅞
❑➫${prefix}addvn 🅞
❑➫${prefix}delvn 🅞
❑➫${prefix}addsticker 🅞
❑➫${prefix}delsticker 🅞
❑➫${prefix}addimage 🅞
❑➫${prefix}delimage 🅞
❑➫${prefix}addvideo 🅞
❑➫${prefix}delvideo 🅞
❑➫${prefix}block add 🅞
❑➫${prefix}unblock del 🅞
❑➫${prefix}leavegc 🅞
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▣

▰▰▰『 Verify Menu 』▰▰▰
❑➫${prefix}logout 🅞
❑➫${prefix}resetotp 🅞
❑➫${prefix}bannedv1 🅞
❑➫${prefix}bannedv2 🅞
❑➫${prefix}bannedv3 🅞
❑➫${prefix}bannedv4 🅞
❑➫${prefix}unbannedv1 🅞
❑➫${prefix}unbannedv2 🅞
❑➫${prefix}unbannedv3 🅞
❑➫${prefix}unbanspamv1 🅞
❑➫${prefix}unbanspamv2 🅞
❑➫${prefix}unbanspamv3 🅞
❑➫${prefix}unbanpermav1 🅞
❑➫${prefix}unbanpermav2 🅞
❑➫${prefix}unbanpermav3 🅞
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▣

▰▰▰『 Bug Menu 』▰▰▰
❑➫${prefix}bugpayment 🅞
❑➫${prefix}bugreact 🅞
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▣

▰▰▰『 Download Menu 』▰▰▰
❑➫${prefix}tiktokvideo 🅕
❑➫${prefix}tiktokaudio 🅕
❑➫${prefix}ytsearch 🅕
❑➫${prefix}mediafire 🅕
❑➫${prefix}play 🅕
❑➫${prefix}ytmp3 🅕
❑➫${prefix}ytmp4 🅕
❑➫${prefix}google 🅕
❑➫${prefix}spotify 🅕
❑➫${prefix}gitclone 🅕
❑➫${prefix}happymod 🅕
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▣

▰▰▰『 Group Menu 』▰▰▰
❑➫${prefix}antilink 🅖
❑➫${prefix}antiwame 🅖
❑➫${prefix}grouplink 🅖
❑➫${prefix}ephemeral 🅖
❑➫${prefix}delete 🅖
❑➫${prefix}setppgroup 🅖
❑➫${prefix}setname 🅖
❑➫${prefix}setdesc 🅖
❑➫${prefix}add 🅖
❑➫${prefix}kick 🅖
❑➫${prefix}promote 🅖
❑➫${prefix}demote 🅖
❑➫${prefix}hidetag 🅖
❑➫${prefix}tagall 🅖
❑➫${prefix}editinfo 🅖
❑➫${prefix}opentime 🅖
❑➫${prefix}closetime 🅖
❑➫${prefix}resetlink 🅖
❑➫${prefix}autostickerpc 🅖
❑➫${prefix}antilinkgc 🅖
❑➫${prefix}antiwame 🅖
❑➫${prefix}antilinkall 🅖
❑➫${prefix}antilinktiktok 🅖
❑➫${prefix}antilinkfb 🅖
❑➫${prefix}antilinktwitter 🅖
❑➫${prefix}antilinkig 🅖
❑➫${prefix}antlinktg 🅖
❑➫${prefix}antilinkytvid 🅖
❑➫${prefix}antilinkytch 🅖
❑➫${prefix}antivirus 🅖
❑➫${prefix}antitoxic 🅖
❑➫${prefix}nsfw 🅖
❑➫${prefix}react 🅖
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▣

▰▰▰『 Random Video 』▰▰▰
❑➫${prefix}tiktokgirl 🅟
❑➫${prefix}tiktoknukthy 🅟
❑➫${prefix}tiktokkayes 🅟
❑➫${prefix}tiktokpanrika 🅟
❑➫${prefix}tiktoknotnot 🅟
❑➫${prefix}tiktokghea 🅟
❑➫${prefix}tiktoksantuy 🅟
❑➫${prefix}tiktokbocil 🅟
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▣

▰▰▰『 Stalker 』▰▰▰
❑➫${prefix}igstalk 🅟
❑➫${prefix}ffstalk 🅟
❑➫${prefix}mlstalk 🅟
❑➫${prefix}npmstalk 🅟
❑➫${prefix}ghstalk 🅟
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▣

▰▰▰『 Other Menu 』▰▰▰
❑➫${prefix}ping 🅕
❑➫${prefix}menu 🅕
❑➫${prefix}listpem 🅕
❑➫${prefix}liststicker 🅕
❑➫${prefix}listimage 🅕
❑➫${prefix}listvideo 🅕
❑➫${prefix}listvn 🅕
❑➫${prefix}listbadword 🅕
❑➫${prefix}listpc 🅕
❑➫${prefix}listgc 🅕
❑➫${prefix}owner 🅕
❑➫${prefix}rentbot 🅟
❑➫${prefix}listrentbot 🅟
❑➫${prefix}donate 🅕
❑➫${prefix}friend 🅕
❑➫${prefix}obfuscate 🅕
❑➫${prefix}styletext 🅕
❑➫${prefix}fliptext 🅕
❑➫${prefix}tts 🅕
❑➫${prefix}say 🅕
❑➫${prefix}togif 🅕
❑➫${prefix}toqr 🅕
❑➫${prefix}bass 🅕
❑➫${prefix}blown 🅕
❑➫${prefix}deep 🅕
❑➫${prefix}earrape 🅕
❑➫${prefix}fast 🅕
❑➫${prefix}fat 🅕
❑➫${prefix}nightcore 🅕
❑➫${prefix}reverse 🅕
❑➫${prefix}robot 🅕
❑➫${prefix}slow 🅕
❑➫${prefix}smooth 🅕
❑➫${prefix}squirrel 🅕
❑➫${prefix}tinyurl 🅕
❑➫${prefix}tinyurl 🅕
❑➫${prefix}tovn 🅕
❑➫${prefix}toaudio 🅕
❑➫${prefix}tomp3 🅕
❑➫${prefix}tomp4🅕
❑➫${prefix}toimg 🅕
❑➫${prefix}toonce 🅕
❑➫${prefix}sticker 🅕
❑➫${prefix}take 🅕
❑➫${prefix}emoji 🅕
❑➫${prefix}volume 🅕
❑➫${prefix}ebinary 🅕
❑➫${prefix}dbinary 🅕
❑➫${prefix}ssweb 🅕
❑➫${prefix}quoted 🅕
❑➫${prefix}runtime 🅕
❑➫${prefix}sound1 - sound161 🅕
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▣

▰▰▰『 Fun Menu 』▰▰▰
❑➫${prefix}define 🅕
❑➫${prefix}truth 🅕
❑➫${prefix}dare 🅕
❑➫${prefix}couple 🅕
❑➫${prefix}soulmate 🅕
❑➫${prefix}stupidcheck 🅕
❑➫${prefix}handsomecheck 🅕
❑➫${prefix}uncleancheck 🅕
❑➫${prefix}hotcheck 🅕
❑➫${prefix}smartcheck 🅕
❑➫${prefix}greatcheck 🅕
❑➫${prefix}evilcheck 🅕
❑➫${prefix}dogcheck 🅕
❑➫${prefix}coolcheck 🅕
❑➫${prefix}waifucheck 🅕
❑➫${prefix}awesomecheck 🅕
❑➫${prefix}gaycheck 🅕
❑➫${prefix}cutecheck 🅕
❑➫${prefix}lesbiancheck 🅕
❑➫${prefix}hornycheck 🅕
❑➫${prefix}prettycheck 🅕
❑➫${prefix}lovelycheck 🅕
❑➫${prefix}uglycheck 🅕
❑➫${prefix}hot 🅕
❑➫${prefix}sexy 🅕
❑➫${prefix}kind 🅕
❑➫${prefix}idiot 🅕
❑➫${prefix}handsome 🅕
❑➫${prefix}beautiful 🅕
❑➫${prefix}cute 🅕
❑➫${prefix}pretty 🅕
❑➫${prefix}lesbian 🅕
❑➫${prefix}noob 🅕
❑➫${prefix}bastard 🅕
❑➫${prefix}foolish 🅕
❑➫${prefix}nerd 🅕
❑➫${prefix}asshole 🅕
❑➫${prefix}gay 🅕
❑➫${prefix}smart 🅕
❑➫${prefix}stubble 🅕
❑➫${prefix}doggo 🅕
❑➫${prefix}horny 🅕
❑➫${prefix}cunt 🅕
❑➫${prefix}wibu 🅕
❑➫${prefix}noobra 🅕
❑➫${prefix}nibba 🅕
❑➫${prefix}nibbi 🅕
❑➫${prefix}comrade 🅕
❑➫${prefix}mumu 🅕
❑➫${prefix}rascal 🅕
❑➫${prefix}scumbag 🅕 
❑➫${prefix}nuts 🅕
❑➫${prefix}fagot 🅕
❑➫${prefix}scoundrel 🅕
❑➫${prefix}ditch 🅕
❑➫${prefix}dope 🅕
❑➫${prefix}gucci 🅕
❑➫${prefix}lit 🅕
❑➫${prefix}dumbass 🅕
❑➫${prefix}crackhead 🅕
❑➫${prefix}mf 🅕
❑➫${prefix}motherfucker 🅕
❑➫${prefix}sucker 🅕
❑➫${prefix}fuckboy 🅕
❑➫${prefix}playboy 🅕
❑➫${prefix}fuckgirl 🅕
❑➫${prefix}playgirl 🅕
❑➫${prefix}quotes 🅕
❑➫${prefix}can 🅕
❑➫${prefix}is 🅕
❑➫${prefix}when 🅕
❑➫${prefix}where 🅕
❑➫${prefix}what 🅕
❑➫${prefix}how 🅕
❑➫${prefix}rate 🅕
❑➫${prefix}cry 🅟
❑➫${prefix}kill 🅟
❑➫${prefix}hug 🅟
❑➫${prefix}pat 🅟
❑➫${prefix}lick 🅟 
❑➫${prefix}kiss 🅟
❑➫${prefix}bite 🅟
❑➫${prefix}yeet 🅟
❑➫${prefix}bully 🅟
❑➫${prefix}bonk 🅟
❑➫${prefix}wink 🅟
❑➫${prefix}poke 🅟
❑➫${prefix}nom 🅟
❑➫${prefix}slap 🅟
❑➫${prefix}smile 🅟 
❑➫${prefix}wave 🅟
❑➫${prefix}awoo 🅟
❑➫${prefix}blush 🅟
❑➫${prefix}smug 🅟
❑➫${prefix}glomp 🅟 
❑➫${prefix}happy 🅟
❑➫${prefix}dance 🅟
❑➫${prefix}cringe 🅟
❑➫${prefix}cuddle 🅟
❑➫${prefix}highfive 🅟 
❑➫${prefix}shinobu 🅟
❑➫${prefix}handhold 🅟
❑➫${prefix}horny 🅕
❑➫${prefix}checkme 🅕
❑➫${prefix}confess 🅕
❑➫${prefix}leave 🅕
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▣

▰▰▰『 Random Photo 』▰▰▰
❑➫${prefix}aesthetic 🅟
❑➫${prefix}coffee 🅟
❑➫${prefix}wikimedia 🅟
❑➫${prefix}wallpaper 🅟
❑➫${prefix}art 🅟
❑➫${prefix}bts 🅟
❑➫${prefix}woof 🅕
❑➫${prefix}meow 🅕
❑➫${prefix}lizard 🅕
❑➫${prefix}cosplay 🅟
❑➫${prefix}hacker 🅟
❑➫${prefix}cyber 🅟
❑➫${prefix}gamewallpaper 🅟
❑➫${prefix}islamic 🅟
❑➫${prefix}jennie 🅟
❑➫${prefix}jiso 🅟
❑➫${prefix}satanic 🅟
❑➫${prefix}justina 🅟
❑➫${prefix}cartoon 🅟
❑➫${prefix}pentol 🅟
❑➫${prefix}cat 🅕
❑➫${prefix}kpop 🅕
❑➫${prefix}exo 🅟
❑➫${prefix}lisa 🅟
❑➫${prefix}space 🅟
❑➫${prefix}car 🅟
❑➫${prefix}technology 🅟
❑➫${prefix}bike 🅟
❑➫${prefix}shortquote 🅟
❑➫${prefix}antiwork 🅕
❑➫${prefix}hacking 🅕
❑➫${prefix}boneka 🅕
❑➫${prefix}rose 🅕
❑➫${prefix}ryujin 🅕
❑➫${prefix}ulzzangboy 🅕
❑➫${prefix}ulzzanggirl 🅕
❑➫${prefix}wallml 🅕
❑➫${prefix}wallphone 🅕
❑➫${prefix}mountain 🅟
❑➫${prefix}goose 🅕
❑➫${prefix}profilepic 🅕
❑➫${prefix}couplepic 🅕
❑➫${prefix}programming 🅟
❑➫${prefix}pubg 🅕
❑➫${prefix}blackpink 🅕
❑➫${prefix}randomboy 🅕  
❑➫${prefix}randomgirl 🅕
❑➫${prefix}hijab 🅕  
❑➫${prefix}chinese 🅕
❑➫${prefix}indo 🅕
❑➫${prefix}japanese 🅕
❑➫${prefix}korean 🅕
❑➫${prefix}malay 🅕
❑➫${prefix}thai 🅕
❑➫${prefix}vietnamese 🅕
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▣

▰▰▰『 Anime 』▰▰▰
❑➫${prefix}akira 🅟
❑➫${prefix}akiyama 🅟
❑➫${prefix}ana 🅟
❑➫${prefix}asuna 🅟
❑➫${prefix}ayuzawa 🅟
❑➫${prefix}boruto 🅟
❑➫${prefix}chiho 🅟
❑➫${prefix}chitoge 🅟
❑➫${prefix}cosplayloli 🅟
❑➫${prefix}cosplaysagiri 🅟
❑➫${prefix}deidara 🅟
❑➫${prefix}doraemon 🅟
❑➫${prefix}elaina 🅟
❑➫${prefix}emilia 🅟
❑➫${prefix}erza 🅟
❑➫${prefix}gremory 🅟
❑➫${prefix}hestia 🅟
❑➫${prefix}hinata 🅟
❑➫${prefix}husbu 🅟
❑➫${prefix}inori 🅟
❑➫${prefix}isuzu 🅟
❑➫${prefix}itachi 🅟
❑➫${prefix}itori 🅟
❑➫${prefix}kaga 🅟
❑➫${prefix}kagura 🅟
❑➫${prefix}kakasih 🅟
❑➫${prefix}kaori 🅟
❑➫${prefix}keneki 🅟
❑➫${prefix}kotori 🅟
❑➫${prefix}kurumi 🅟
❑➫${prefix}loli 🅟
❑➫${prefix}madara 🅟
❑➫${prefix}megumin 🅟
❑➫${prefix}mikasa 🅟
❑➫${prefix}mikey 🅟
❑➫${prefix}miku 🅟
❑➫${prefix}minato 🅟
❑➫${prefix}naruto 🅟
❑➫${prefix}neko 🅟
❑➫${prefix}neko2 🅟
❑➫${prefix}nekonime 🅟
❑➫${prefix}nezuko 🅟
❑➫${prefix}onepiece 🅟
❑➫${prefix}pokemon 🅟
❑➫${prefix}randomnime 🅟
❑➫${prefix}randomnime2 🅟
❑➫${prefix}rize 🅟
❑➫${prefix}sagiri 🅟
❑➫${prefix}sakura 🅟
❑➫${prefix}sasuke 🅟
❑➫${prefix}shina 🅟
❑➫${prefix}shinka 🅟
❑➫${prefix}shinomiya 🅟
❑➫${prefix}shizuka 🅟
❑➫${prefix}shota 🅟
❑➫${prefix}tejina 🅟
❑➫${prefix}toukachan 🅟
❑➫${prefix}tsunade 🅟
❑➫${prefix}waifu 🅟
❑➫${prefix}animewall 🅟
❑➫${prefix}yotsuba 🅟
❑➫${prefix}yuki 🅟
❑➫${prefix}yulibocil 🅟
❑➫${prefix}yumeko 🅟
❑➫${prefix}8ball 🅕
❑➫${prefix}tickle 🅕
❑➫${prefix}gecg 🅕
❑➫${prefix}feed 🅕
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▣

▰▰▰『 Anime NSFW 』▰▰▰
❑➫${prefix}hentai 🅕
❑➫${prefix}gifhentai 🅕
❑➫${prefix}gifblowjob 🅕
❑➫${prefix}hentaivid 🅕
❑➫${prefix}hneko 🅕
❑➫${prefix}nwaifu 🅕
❑➫${prefix}animespank 🅕
❑➫${prefix}trap 🅕
❑➫${prefix}gasm 🅕
❑➫${prefix}ahegao 🅕
❑➫${prefix}ass 🅕
❑➫${prefix}bdsm 🅕
❑➫${prefix}blowjob 🅕
❑➫${prefix}cuckold 🅕
❑➫${prefix}cum 🅕
❑➫${prefix}milf 🅕
❑➫${prefix}eba 🅕
❑➫${prefix}ero 🅕
❑➫${prefix}femdom 🅕
❑➫${prefix}foot 🅕
❑➫${prefix}gangbang 🅕
❑➫${prefix}glasses 🅕
❑➫${prefix}jahy 🅕
❑➫${prefix}masturbation 🅕
❑➫${prefix}manga 🅕
❑➫${prefix}neko-hentai 🅕
❑➫${prefix}neko-hentai2 🅕
❑➫${prefix}nsfwloli 🅕
❑➫${prefix}orgy 🅕
❑➫${prefix}panties 🅕 
❑➫${prefix}pussy 🅕
❑➫${prefix}tentacles 🅕
❑➫${prefix}thights 🅕
❑➫${prefix}yuri 🅕
❑➫${prefix}zettai 🅕
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▣

▰▰▰『 Textpro Maker 』▰▰▰
❑➫${prefix}candy 🅟 
❑➫${prefix}christmas 🅟 
❑➫${prefix}3dchristmas 🅟 
❑➫${prefix}sparklechristmas 🅟
❑➫${prefix}deepsea 🅟 
❑➫${prefix}scifi 🅟 
❑➫${prefix}rainbow 🅟 
❑➫${prefix}waterpipe 🅟 
❑➫${prefix}spooky 🅟 
❑➫${prefix}pencil 🅟 
❑➫${prefix}circuit 🅟 
❑➫${prefix}discovery 🅟 
❑➫${prefix}metalic 🅟 
❑➫${prefix}fiction 🅟 
❑➫${prefix}demon 🅟 
❑➫${prefix}transformer 🅟 
❑➫${prefix}berry 🅟 
❑➫${prefix}thunder 🅟 
❑➫${prefix}magma 🅟 
❑➫${prefix}3dstone 🅟 
❑➫${prefix}neonlight 🅟 
❑➫${prefix}glitch 🅟 
❑➫${prefix}harrypotter 🅟 
❑➫${prefix}brokenglass 🅟 
❑➫${prefix}papercut 🅟 
❑➫${prefix}watercolor 🅟 
❑➫${prefix}multicolor 🅟 
❑➫${prefix}neondevil 🅟 
❑➫${prefix}underwater 🅟 
❑➫${prefix}graffitibike 🅟
❑➫${prefix}snow 🅟 
❑➫${prefix}cloud 🅟 
❑➫${prefix}honey 🅟 
❑➫${prefix}ice 🅟 
❑➫${prefix}fruitjuice 🅟 
❑➫${prefix}biscuit 🅟 
❑➫${prefix}wood 🅟 
❑➫${prefix}chocolate 🅟 
❑➫${prefix}strawberry 🅟 
❑➫${prefix}matrix 🅟 
❑➫${prefix}blood 🅟 
❑➫${prefix}dropwater 🅟 
❑➫${prefix}toxic 🅟 
❑➫${prefix}lava 🅟 
❑➫${prefix}rock 🅟 
❑➫${prefix}bloodglas 🅟 
❑➫${prefix}hallowen 🅟 
❑➫${prefix}darkgold 🅟 
❑➫${prefix}joker 🅟 
❑➫${prefix}wicker 🅟
❑➫${prefix}firework 🅟 
❑➫${prefix}skeleton 🅟 
❑➫${prefix}blackpink 🅟 
❑➫${prefix}sand 🅟 
❑➫${prefix}glue 🅟 
❑➫${prefix}1917 🅟 
❑➫${prefix}leaves 🅟
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▣

▰▰▰『 PhotoOxy Maker 』▰▰▰
❑➫${prefix}shadow 🅟 
❑➫${prefix}write 🅟 
❑➫${prefix}romantic 🅟 
❑➫${prefix}burnpaper 🅟
❑➫${prefix}smoke 🅟 
❑➫${prefix}narutobanner 🅟 
❑➫${prefix}love 🅟 
❑➫${prefix}undergrass 🅟
❑➫${prefix}doublelove 🅟 
❑➫${prefix}coffecup 🅟
❑➫${prefix}underwaterocean 🅟
❑➫${prefix}smokyneon 🅟
❑➫${prefix}starstext 🅟
❑➫${prefix}rainboweffect 🅟
❑➫${prefix}balloontext 🅟
❑➫${prefix}metalliceffect 🅟
❑➫${prefix}embroiderytext 🅟
❑➫${prefix}flamingtext 🅟
❑➫${prefix}stonetext 🅟
❑➫${prefix}writeart 🅟
❑➫${prefix}summertext 🅟
❑➫${prefix}wolfmetaltext 🅟
❑➫${prefix}nature3dtext 🅟
❑➫${prefix}rosestext 🅟
❑➫${prefix}naturetypography 🅟
❑➫${prefix}quotesunder 🅟
❑➫${prefix}shinetext 🅟
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▣

▰▰▰『 Ephoto360 Maker 』▰▰▰
❑➫${prefix}glitchtext 🅟
❑➫${prefix}writetext 🅟
❑➫${prefix}advancedglow 🅟
❑➫${prefix}typographytext 🅟
❑➫${prefix}pixelglitch 🅟
❑➫${prefix}neonglitch 🅟
❑➫${prefix}flagtext 🅟
❑➫${prefix}flag3dtext 🅟
❑➫${prefix}deletingtext 🅟
❑➫${prefix}blackpinkstyle 🅟
❑➫${prefix}glowingtext 🅟
❑➫${prefix}underwatertext 🅟
❑➫${prefix}logomaker 🅟
❑➫${prefix}cartoonstyle 🅟
❑➫${prefix}papercutstyle 🅟
❑➫${prefix}watercolortext 🅟
❑➫${prefix}effectclouds 🅟
❑➫${prefix}blackpinklogo 🅟
❑➫${prefix}gradienttext 🅟
❑➫${prefix}summerbeach 🅟
❑➫${prefix}luxurygold 🅟
❑➫${prefix}multicoloredneon 🅟
❑➫${prefix}sandsummer 🅟
❑➫${prefix}galaxywallpaper 🅟
❑➫${prefix}1917style 🅟
❑➫${prefix}makingneon 🅟
❑➫${prefix}royaltext 🅟
❑➫${prefix}freecreate 🅟
❑➫${prefix}galaxystyle 🅟
❑➫${prefix}lighteffects 🅟
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▣
`}

global.animemenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

▰▰▰『 Anime 』▰▰▰
❑➫${prefix}akira 🅟
❑➫${prefix}akiyama 🅟
❑➫${prefix}ana 🅟
❑➫${prefix}asuna 🅟
❑➫${prefix}ayuzawa 🅟
❑➫${prefix}boruto 🅟
❑➫${prefix}chiho 🅟
❑➫${prefix}chitoge 🅟
❑➫${prefix}cosplayloli 🅟
❑➫${prefix}cosplaysagiri 🅟
❑➫${prefix}deidara 🅟
❑➫${prefix}doraemon 🅟
❑➫${prefix}elaina 🅟
❑➫${prefix}emilia 🅟
❑➫${prefix}erza 🅟
❑➫${prefix}gremory 🅟
❑➫${prefix}hestia 🅟
❑➫${prefix}hinata 🅟
❑➫${prefix}husbu 🅟
❑➫${prefix}inori 🅟
❑➫${prefix}isuzu 🅟
❑➫${prefix}itachi 🅟
❑➫${prefix}itori 🅟
❑➫${prefix}kaga 🅟
❑➫${prefix}kagura 🅟
❑➫${prefix}kakasih 🅟
❑➫${prefix}kaori 🅟
❑➫${prefix}keneki 🅟
❑➫${prefix}kotori 🅟
❑➫${prefix}kurumi 🅟
❑➫${prefix}loli 🅟
❑➫${prefix}madara 🅟
❑➫${prefix}megumin 🅟
❑➫${prefix}mikasa 🅟
❑➫${prefix}mikey 🅟
❑➫${prefix}miku 🅟
❑➫${prefix}minato 🅟
❑➫${prefix}naruto 🅟
❑➫${prefix}neko 🅟
❑➫${prefix}neko2 🅟
❑➫${prefix}nekonime 🅟
❑➫${prefix}nezuko 🅟
❑➫${prefix}onepiece 🅟
❑➫${prefix}pokemon 🅟
❑➫${prefix}randomnime 🅟
❑➫${prefix}randomnime2 🅟
❑➫${prefix}rize 🅟
❑➫${prefix}sagiri 🅟
❑➫${prefix}sakura 🅟
❑➫${prefix}sasuke 🅟
❑➫${prefix}shina 🅟
❑➫${prefix}shinka 🅟
❑➫${prefix}shinomiya 🅟
❑➫${prefix}shizuka 🅟
❑➫${prefix}shota 🅟
❑➫${prefix}tejina 🅟
❑➫${prefix}toukachan 🅟
❑➫${prefix}tsunade 🅟
❑➫${prefix}waifu 🅟
❑➫${prefix}animewall 🅟
❑➫${prefix}yotsuba 🅟
❑➫${prefix}yuki 🅟
❑➫${prefix}yulibocil 🅟
❑➫${prefix}yumeko 🅟
❑➫${prefix}8ball 🅕
❑➫${prefix}tickle 🅕
❑➫${prefix}gecg 🅕
❑➫${prefix}feed 🅕
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▣
`}

global.ownermenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

▰▰▰『 Owner Menu 』▰▰▰
❑➫${prefix}self 🅞
❑➫${prefix}public 🅞
❑➫${prefix}join 🅞
❑➫${prefix}bctext 🅞
❑➫${prefix}bcimage 🅞
❑➫${prefix}bcvideo 🅞
❑➫${prefix}creategc 🅞
❑➫${prefix}setexif 🅞
❑➫${prefix}shutdown 🅞
❑➫${prefix}autostickergc 🅞
❑➫${prefix}setppbot 🅞
❑➫${prefix}addprem 🅞
❑➫${prefix}delprem 🅞
❑➫${prefix}addowner 🅞
❑➫${prefix}delowner 🅞
❑➫${prefix}addvn 🅞
❑➫${prefix}delvn 🅞
❑➫${prefix}addsticker 🅞
❑➫${prefix}delsticker 🅞
❑➫${prefix}addimage 🅞
❑➫${prefix}delimage 🅞
❑➫${prefix}addvideo 🅞
❑➫${prefix}delvideo 🅞
❑➫${prefix}block add 🅞
❑➫${prefix}unblock del 🅞
❑➫${prefix}leavegc 🅞
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▣
`}

global.verifymenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

▰▰▰『 Verify Menu 』▰▰▰
❑➫${prefix}logout 🅞
❑➫${prefix}resetotp 🅞
❑➫${prefix}bannedv1 🅞
❑➫${prefix}bannedv2 🅞
❑➫${prefix}bannedv3 🅞
❑➫${prefix}bannedv4 🅞
❑➫${prefix}unbannedv1 🅞
❑➫${prefix}unbannedv2 🅞
❑➫${prefix}unbannedv3 🅞
❑➫${prefix}unbanspamv1 🅞
❑➫${prefix}unbanspamv2 🅞
❑➫${prefix}unbanspamv3 🅞
❑➫${prefix}unbanpermav1 🅞
❑➫${prefix}unbanpermav2 🅞
❑➫${prefix}unbanpermav3 🅞
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▣
`}

global.bugmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

▰▰▰『 Bug Menu 』▰▰▰
❑➫${prefix}bugpayment 🅞
❑➫${prefix}bugreact 🅞
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▣
`}

global.othermenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

▰▰▰『 Other Menu 』▰▰▰
❑➫${prefix}ping 🅕
❑➫${prefix}menu 🅕
❑➫${prefix}listpem 🅕
❑➫${prefix}liststicker 🅕
❑➫${prefix}listimage 🅕
❑➫${prefix}listvideo 🅕
❑➫${prefix}listvn 🅕
❑➫${prefix}listbadword 🅕
❑➫${prefix}listpc 🅕
❑➫${prefix}listgc 🅕
❑➫${prefix}owner 🅕
❑➫${prefix}rentbot 🅟
❑➫${prefix}listrentbot 🅟
❑➫${prefix}donate 🅕
❑➫${prefix}friend 🅕
❑➫${prefix}obfuscate 🅕
❑➫${prefix}styletext 🅕
❑➫${prefix}fliptext 🅕
❑➫${prefix}tts 🅕
❑➫${prefix}say 🅕
❑➫${prefix}togif 🅕
❑➫${prefix}toqr 🅕
❑➫${prefix}bass 🅕
❑➫${prefix}blown 🅕
❑➫${prefix}deep 🅕
❑➫${prefix}earrape 🅕
❑➫${prefix}fast 🅕
❑➫${prefix}fat 🅕
❑➫${prefix}nightcore 🅕
❑➫${prefix}reverse 🅕
❑➫${prefix}robot 🅕
❑➫${prefix}slow 🅕
❑➫${prefix}smooth 🅕
❑➫${prefix}squirrel 🅕
❑➫${prefix}tinyurl 🅕
❑➫${prefix}tinyurl 🅕
❑➫${prefix}tovn 🅕
❑➫${prefix}toaudio 🅕
❑➫${prefix}tomp3 🅕
❑➫${prefix}tomp4🅕
❑➫${prefix}toimg 🅕
❑➫${prefix}toonce 🅕
❑➫${prefix}sticker 🅕
❑➫${prefix}take 🅕
❑➫${prefix}emoji 🅕
❑➫${prefix}volume 🅕
❑➫${prefix}ebinary 🅕
❑➫${prefix}dbinary 🅕
❑➫${prefix}ssweb 🅕
❑➫${prefix}quoted 🅕
❑➫${prefix}runtime 🅕
❑➫${prefix}sound1 - sound161 🅕
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▣
`}

global.downloadmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

▰▰▰『 Download Menu 』▰▰▰
❑➫${prefix}tiktokvideo 🅕
❑➫${prefix}tiktokaudio 🅕
❑➫${prefix}ytsearch 🅕
❑➫${prefix}mediafire 🅕
❑➫${prefix}play 🅕
❑➫${prefix}ytmp3 🅕
❑➫${prefix}ytmp4 🅕
❑➫${prefix}google 🅕
❑➫${prefix}spotify 🅕
❑➫${prefix}gitclone 🅕
❑➫${prefix}happymod 🅕
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▣
`}

global.groupmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

▰▰▰『 Group Menu 』▰▰▰
❑➫${prefix}antilink 🅖
❑➫${prefix}antiwame 🅖
❑➫${prefix}grouplink 🅖
❑➫${prefix}ephemeral 🅖
❑➫${prefix}delete 🅖
❑➫${prefix}setppgroup 🅖
❑➫${prefix}setname 🅖
❑➫${prefix}setdesc 🅖
❑➫${prefix}add 🅖
❑➫${prefix}kick 🅖
❑➫${prefix}promote 🅖
❑➫${prefix}demote 🅖
❑➫${prefix}hidetag 🅖
❑➫${prefix}tagall 🅖
❑➫${prefix}editinfo 🅖
❑➫${prefix}opentime 🅖
❑➫${prefix}closetime 🅖
❑➫${prefix}resetlink 🅖
❑➫${prefix}autostickerpc 🅖
❑➫${prefix}antilinkgc 🅖
❑➫${prefix}antiwame 🅖
❑➫${prefix}antilinkall 🅖
❑➫${prefix}antilinktiktok 🅖
❑➫${prefix}antilinkfb 🅖
❑➫${prefix}antilinktwitter 🅖
❑➫${prefix}antilinkig 🅖
❑➫${prefix}antlinktg 🅖
❑➫${prefix}antilinkytvid 🅖
❑➫${prefix}antilinkytch 🅖
❑➫${prefix}antivirus 🅖
❑➫${prefix}antitoxic 🅖
❑➫${prefix}nsfw 🅖
❑➫${prefix}react 🅖
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▣
`}

global.funmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

▰▰▰『 Fun Menu 』▰▰▰
❑➫${prefix}define 🅕
❑➫${prefix}truth 🅕
❑➫${prefix}dare 🅕
❑➫${prefix}couple 🅕
❑➫${prefix}soulmate 🅕
❑➫${prefix}stupidcheck 🅕
❑➫${prefix}handsomecheck 🅕
❑➫${prefix}uncleancheck 🅕
❑➫${prefix}hotcheck 🅕
❑➫${prefix}smartcheck 🅕
❑➫${prefix}greatcheck 🅕
❑➫${prefix}evilcheck 🅕
❑➫${prefix}dogcheck 🅕
❑➫${prefix}coolcheck 🅕
❑➫${prefix}waifucheck 🅕
❑➫${prefix}awesomecheck 🅕
❑➫${prefix}gaycheck 🅕
❑➫${prefix}cutecheck 🅕
❑➫${prefix}lesbiancheck 🅕
❑➫${prefix}hornycheck 🅕
❑➫${prefix}prettycheck 🅕
❑➫${prefix}lovelycheck 🅕
❑➫${prefix}uglycheck 🅕
❑➫${prefix}hot 🅕
❑➫${prefix}sexy 🅕
❑➫${prefix}kind 🅕
❑➫${prefix}idiot 🅕
❑➫${prefix}handsome 🅕
❑➫${prefix}beautiful 🅕
❑➫${prefix}cute 🅕
❑➫${prefix}pretty 🅕
❑➫${prefix}lesbian 🅕
❑➫${prefix}noob 🅕
❑➫${prefix}bastard 🅕
❑➫${prefix}foolish 🅕
❑➫${prefix}nerd 🅕
❑➫${prefix}asshole 🅕
❑➫${prefix}gay 🅕
❑➫${prefix}smart 🅕
❑➫${prefix}stubble 🅕
❑➫${prefix}doggo 🅕
❑➫${prefix}horny 🅕
❑➫${prefix}cunt 🅕
❑➫${prefix}wibu 🅕
❑➫${prefix}noobra 🅕
❑➫${prefix}nibba 🅕
❑➫${prefix}nibbi 🅕
❑➫${prefix}comrade 🅕
❑➫${prefix}mumu 🅕
❑➫${prefix}rascal 🅕
❑➫${prefix}scumbag 🅕 
❑➫${prefix}nuts 🅕
❑➫${prefix}fagot 🅕
❑➫${prefix}scoundrel 🅕
❑➫${prefix}ditch 🅕
❑➫${prefix}dope 🅕
❑➫${prefix}gucci 🅕
❑➫${prefix}lit 🅕
❑➫${prefix}dumbass 🅕
❑➫${prefix}crackhead 🅕
❑➫${prefix}mf 🅕
❑➫${prefix}motherfucker 🅕
❑➫${prefix}sucker 🅕
❑➫${prefix}fuckboy 🅕
❑➫${prefix}playboy 🅕
❑➫${prefix}fuckgirl 🅕
❑➫${prefix}playgirl 🅕
❑➫${prefix}quotes 🅕
❑➫${prefix}can 🅕
❑➫${prefix}is 🅕
❑➫${prefix}when 🅕
❑➫${prefix}where 🅕
❑➫${prefix}what 🅕
❑➫${prefix}how 🅕
❑➫${prefix}rate 🅕
❑➫${prefix}cry 🅟
❑➫${prefix}kill 🅟
❑➫${prefix}hug 🅟
❑➫${prefix}pat 🅟
❑➫${prefix}lick 🅟 
❑➫${prefix}kiss 🅟
❑➫${prefix}bite 🅟
❑➫${prefix}yeet 🅟
❑➫${prefix}bully 🅟
❑➫${prefix}bonk 🅟
❑➫${prefix}wink 🅟
❑➫${prefix}poke 🅟
❑➫${prefix}nom 🅟
❑➫${prefix}slap 🅟
❑➫${prefix}smile 🅟 
❑➫${prefix}wave 🅟
❑➫${prefix}awoo 🅟
❑➫${prefix}blush 🅟
❑➫${prefix}smug 🅟
❑➫${prefix}glomp 🅟 
❑➫${prefix}happy 🅟
❑➫${prefix}dance 🅟
❑➫${prefix}cringe 🅟
❑➫${prefix}cuddle 🅟
❑➫${prefix}highfive 🅟 
❑➫${prefix}shinobu 🅟
❑➫${prefix}handhold 🅟
❑➫${prefix}horny 🅕
❑➫${prefix}checkme 🅕
❑➫${prefix}confess 🅕
❑➫${prefix}leave 🅕
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▣
`}

global.stalkermenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

▰▰▰『 Stalker 』▰▰▰
❑➫${prefix}igstalk 🅟
❑➫${prefix}ffstalk 🅟
❑➫${prefix}mlstalk 🅟
❑➫${prefix}npmstalk 🅟
❑➫${prefix}ghstalk 🅟
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▣
`}

global.randphotomenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

▰▰▰『 Random Photo 』▰▰▰
❑➫${prefix}aesthetic 🅟
❑➫${prefix}coffee 🅟
❑➫${prefix}wikimedia 🅟
❑➫${prefix}wallpaper 🅟
❑➫${prefix}art 🅟
❑➫${prefix}bts 🅟
❑➫${prefix}woof 🅕
❑➫${prefix}meow 🅕
❑➫${prefix}lizard 🅕
❑➫${prefix}cosplay 🅟
❑➫${prefix}hacker 🅟
❑➫${prefix}cyber 🅟
❑➫${prefix}gamewallpaper 🅟
❑➫${prefix}islamic 🅟
❑➫${prefix}jennie 🅟
❑➫${prefix}jiso 🅟
❑➫${prefix}satanic 🅟
❑➫${prefix}justina 🅟
❑➫${prefix}cartoon 🅟
❑➫${prefix}pentol 🅟
❑➫${prefix}cat 🅕
❑➫${prefix}kpop 🅕
❑➫${prefix}exo 🅟
❑➫${prefix}lisa 🅟
❑➫${prefix}space 🅟
❑➫${prefix}car 🅟
❑➫${prefix}technology 🅟
❑➫${prefix}bike 🅟
❑➫${prefix}shortquote 🅟
❑➫${prefix}antiwork 🅕
❑➫${prefix}hacking 🅕
❑➫${prefix}boneka 🅕
❑➫${prefix}rose 🅕
❑➫${prefix}ryujin 🅕
❑➫${prefix}ulzzangboy 🅕
❑➫${prefix}ulzzanggirl 🅕
❑➫${prefix}wallml 🅕
❑➫${prefix}wallphone 🅕
❑➫${prefix}mountain 🅟
❑➫${prefix}goose 🅕
❑➫${prefix}profilepic 🅕
❑➫${prefix}couplepic 🅕
❑➫${prefix}programming 🅟
❑➫${prefix}pubg 🅕
❑➫${prefix}blackpink 🅕
❑➫${prefix}randomboy 🅕  
❑➫${prefix}randomgirl 🅕
❑➫${prefix}hijab 🅕  
❑➫${prefix}chinese 🅕
❑➫${prefix}indo 🅕
❑➫${prefix}japanese 🅕
❑➫${prefix}korean 🅕
❑➫${prefix}malay 🅕
❑➫${prefix}thai 🅕
❑➫${prefix}vietnamese 🅕
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▣
`}

global.randvideomenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

▰▰▰『 Random Video 』▰▰▰
❑➫${prefix}tiktokgirl 🅟
❑➫${prefix}tiktoknukthy 🅟
❑➫${prefix}tiktokkayes 🅟
❑➫${prefix}tiktokpanrika 🅟
❑➫${prefix}tiktoknotnot 🅟
❑➫${prefix}tiktokghea 🅟
❑➫${prefix}tiktoksantuy 🅟
❑➫${prefix}tiktokbocil 🅟
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▣
`}

global.textpromenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

▰▰▰『 Textpro Maker 』▰▰▰
❑➫${prefix}candy 🅟 
❑➫${prefix}christmas 🅟 
❑➫${prefix}3dchristmas 🅟 
❑➫${prefix}sparklechristmas 🅟
❑➫${prefix}deepsea 🅟 
❑➫${prefix}scifi 🅟 
❑➫${prefix}rainbow 🅟 
❑➫${prefix}waterpipe 🅟 
❑➫${prefix}spooky 🅟 
❑➫${prefix}pencil 🅟 
❑➫${prefix}circuit 🅟 
❑➫${prefix}discovery 🅟 
❑➫${prefix}metalic 🅟 
❑➫${prefix}fiction 🅟 
❑➫${prefix}demon 🅟 
❑➫${prefix}transformer 🅟 
❑➫${prefix}berry 🅟 
❑➫${prefix}thunder 🅟 
❑➫${prefix}magma 🅟 
❑➫${prefix}3dstone 🅟 
❑➫${prefix}neonlight 🅟 
❑➫${prefix}glitch 🅟 
❑➫${prefix}harrypotter 🅟 
❑➫${prefix}brokenglass 🅟 
❑➫${prefix}papercut 🅟 
❑➫${prefix}watercolor 🅟 
❑➫${prefix}multicolor 🅟 
❑➫${prefix}neondevil 🅟 
❑➫${prefix}underwater 🅟 
❑➫${prefix}graffitibike 🅟
❑➫${prefix}snow 🅟 
❑➫${prefix}cloud 🅟 
❑➫${prefix}honey 🅟 
❑➫${prefix}ice 🅟 
❑➫${prefix}fruitjuice 🅟 
❑➫${prefix}biscuit 🅟 
❑➫${prefix}wood 🅟 
❑➫${prefix}chocolate 🅟 
❑➫${prefix}strawberry 🅟 
❑➫${prefix}matrix 🅟 
❑➫${prefix}blood 🅟 
❑➫${prefix}dropwater 🅟 
❑➫${prefix}toxic 🅟 
❑➫${prefix}lava 🅟 
❑➫${prefix}rock 🅟 
❑➫${prefix}bloodglas 🅟 
❑➫${prefix}hallowen 🅟 
❑➫${prefix}darkgold 🅟 
❑➫${prefix}joker 🅟 
❑➫${prefix}wicker 🅟
❑➫${prefix}firework 🅟 
❑➫${prefix}skeleton 🅟 
❑➫${prefix}blackpink 🅟 
❑➫${prefix}sand 🅟 
❑➫${prefix}glue 🅟 
❑➫${prefix}1917 🅟 
❑➫${prefix}leaves 🅟
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▣
`}

global.photooxymenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

▰▰▰『 PhotoOxy Maker 』▰▰▰
❑➫${prefix}shadow 🅟 
❑➫${prefix}write 🅟 
❑➫${prefix}romantic 🅟 
❑➫${prefix}burnpaper 🅟
❑➫${prefix}smoke 🅟 
❑➫${prefix}narutobanner 🅟 
❑➫${prefix}love 🅟 
❑➫${prefix}undergrass 🅟
❑➫${prefix}doublelove 🅟 
❑➫${prefix}coffecup 🅟
❑➫${prefix}underwaterocean 🅟
❑➫${prefix}smokyneon 🅟
❑➫${prefix}starstext 🅟
❑➫${prefix}rainboweffect 🅟
❑➫${prefix}balloontext 🅟
❑➫${prefix}metalliceffect 🅟
❑➫${prefix}embroiderytext 🅟
❑➫${prefix}flamingtext 🅟
❑➫${prefix}stonetext 🅟
❑➫${prefix}writeart 🅟
❑➫${prefix}summertext 🅟
❑➫${prefix}wolfmetaltext 🅟
❑➫${prefix}nature3dtext 🅟
❑➫${prefix}rosestext 🅟
❑➫${prefix}naturetypography 🅟
❑➫${prefix}quotesunder 🅟
❑➫${prefix}shinetext 🅟
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▣
`}

global.ephoto360menu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

▰▰▰『 Ephoto360 Maker 』▰▰▰
❑➫${prefix}glitchtext 🅟
❑➫${prefix}writetext 🅟
❑➫${prefix}advancedglow 🅟
❑➫${prefix}typographytext 🅟
❑➫${prefix}pixelglitch 🅟
❑➫${prefix}neonglitch 🅟
❑➫${prefix}flagtext 🅟
❑➫${prefix}flag3dtext 🅟
❑➫${prefix}deletingtext 🅟
❑➫${prefix}blackpinkstyle 🅟
❑➫${prefix}glowingtext 🅟
❑➫${prefix}underwatertext 🅟
❑➫${prefix}logomaker 🅟
❑➫${prefix}cartoonstyle 🅟
❑➫${prefix}papercutstyle 🅟
❑➫${prefix}watercolortext 🅟
❑➫${prefix}effectclouds 🅟
❑➫${prefix}blackpinklogo 🅟
❑➫${prefix}gradienttext 🅟
❑➫${prefix}summerbeach 🅟
❑➫${prefix}luxurygold 🅟
❑➫${prefix}multicoloredneon 🅟
❑➫${prefix}sandsummer 🅟
❑➫${prefix}galaxywallpaper 🅟
❑➫${prefix}1917style 🅟
❑➫${prefix}makingneon 🅟
❑➫${prefix}royaltext 🅟
❑➫${prefix}freecreate 🅟
❑➫${prefix}galaxystyle 🅟
❑➫${prefix}lighteffects 🅟
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▣
`}

global.nsfwmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

▰▰▰『 Anime NSFW 』▰▰▰
❑➫${prefix}hentai 🅕
❑➫${prefix}gifhentai 🅕
❑➫${prefix}gifblowjob 🅕
❑➫${prefix}hentaivid 🅕
❑➫${prefix}hneko 🅕
❑➫${prefix}nwaifu 🅕
❑➫${prefix}animespank 🅕
❑➫${prefix}trap 🅕
❑➫${prefix}gasm 🅕
❑➫${prefix}ahegao 🅕
❑➫${prefix}ass 🅕
❑➫${prefix}bdsm 🅕
❑➫${prefix}blowjob 🅕
❑➫${prefix}cuckold 🅕
❑➫${prefix}cum 🅕
❑➫${prefix}milf 🅕
❑➫${prefix}eba 🅕
❑➫${prefix}ero 🅕
❑➫${prefix}femdom 🅕
❑➫${prefix}foot 🅕
❑➫${prefix}gangbang 🅕
❑➫${prefix}glasses 🅕
❑➫${prefix}jahy 🅕
❑➫${prefix}masturbation 🅕
❑➫${prefix}manga 🅕
❑➫${prefix}neko-hentai 🅕
❑➫${prefix}neko-hentai2 🅕
❑➫${prefix}nsfwloli 🅕
❑➫${prefix}orgy 🅕
❑➫${prefix}panties 🅕 
❑➫${prefix}pussy 🅕
❑➫${prefix}tentacles 🅕
❑➫${prefix}thights 🅕
❑➫${prefix}yuri 🅕
❑➫${prefix}zettai 🅕
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▣
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})