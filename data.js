// Bulgarian Data Leaks - Static Data
// This file replaces the previous data/data.txt file
// All leak information is now stored as JavaScript objects

const leaks = [
    {
        name: "STENIK Group",
        domain: "stenik.bg",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "Naglite.com",
        date: "2024-05-08",
        sourceUrl: "https://darkforums.st/Thread-Selling-STENIK-Group-Bulgaria-Company-2M",
        evidenceImages: ["images/stenik.png", "images/stenik2.png", "images/stenik3.png"]
    },
    {
        name: "Bulgarian Database",
        domain: "",
        sector: "private",
        economicSector: "Other",
        threatActor: "fuckoverflow [Forum member]",
        date: "2025-11-15",
        sourceUrl: "https://darkforums.st/Thread-Selling-Bulgaria-Database",
        evidenceImages: ["images/bulgarian_database.png"]
    },
    {
        name: "DallBogg.bg [20k personal records]",
        domain: "",
        sector: "private",
        economicSector: "Financial",
        threatActor: "Tanaka [Forum member]",
        date: "2025-09-11",
        sourceUrl: "https://darkforums.st/Thread-DallBogg-bg-20k-greece-insurance-identity",
        evidenceImages: ["images/dallbogg.png"]
    },
    {
        name: "SpiderSport.com",
        domain: "",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "Tanaka [Forum member]",
        date: "2023-03-11",
        sourceUrl: "https://darkforums.st/Thread-Bulgaria-database%C2%A0-spidersport-com",
        evidenceImages: ["images/spidersport.png"]
    },
    {
        name: "Lira.bg",
        domain: "",
        sector: "private",
        economicSector: "Media",
        threatActor: "Tanaka [Forum member]",
        date: "2023-12-13",
        sourceUrl: "https://darkforums.st/Thread-Bulgaria-lira-bg-Wordpress-Database",
        evidenceImages: ["images/lira.png"]
    },
    {
        name: "MK Brokers - 7GB",
        domain: "mkb.bg",
        sector: "private",
        economicSector: "Financial",
        threatActor: "Clobelsecteam [Forum member]",
        date: "2025-09-09",
        sourceUrl: "https://darkforums.st/Thread-DATABASE-7GB-MK-Brokers-Bank-Bulgaria",
        evidenceImages: ["images/mk_brokers_bank.png", "images/mk_brokers_bank2.png"]
    },
    {
        name: "SportVision - 1,390,766 records",
        domain: "sportvision.bg",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "LeVendeur [Forum member]",
        date: "2025-06-25",
        sourceUrl: "https://darkforums.st/Thread-Selling-SportVision-1-390-766M-Bulgaria",
        evidenceImages: ["images/sportvision.png", "images/sportvision2.png"]
    },
    {
        name: "Pilini.bg [size: 64M rows: 160k]",
        domain: "",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "RansomedVC [$8,000 ransom]",
        date: "2023-09-09",
        sourceUrl: "https://darkforums.st/Thread-pilini-bg",
        evidenceImages: ["images/pilini.png", "images/pilini2.png"]
    },
    {
        name: "Kasida.bg",
        domain: "",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "RansomedVC [$8,000 ransom]",
        date: "2023-09-09",
        sourceUrl: "https://darkforums.st/Thread-kasida-bg",
        evidenceImages: ["images/kasida.png"]
    },
    {
        name: "B2B Bulgaria",
        domain: "",
        sector: "private",
        economicSector: "General Services",
        threatActor: "Mamadou88 [Forum member]",
        date: "2025-01-29",
        sourceUrl: "https://leakbase.la/threads/16198-b2b-bulgaria.33522/",
        evidenceImages: ["images/b2b_bulgaria.png"]
    },
    {
        name: "8hristo.com [162 MB]",
        domain: "",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "HeartLeak [Forum member]",
        date: "2024-08-07",
        sourceUrl: "https://leakbase.la/threads/bulgaria-8hristo-com-162-mb.27792/",
        evidenceImages: ["images/8hristo.png"]
    },
    {
        name: "Douglas.bg [589 MB]",
        domain: "",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "HeartLeak [Forum member]",
        date: "2024-03-03",
        sourceUrl: "https://leakbase.la/threads/bulgaria-douglas-bg-589-mb.27790/",
        evidenceImages: ["images/douglas.png"]
    },
    {
        name: "LillyDrogerie.bg [413 MB]",
        domain: "",
        sector: "private",
        economicSector: "Healthcare & Pharma",
        threatActor: "HeartLeak [Forum member]",
        date: "2024-08-07",
        sourceUrl: "https://leakbase.la/threads/bulgaria-shop-llillydrogerie-bg-413-mb.27787/",
        evidenceImages: ["images/lillydrogerie.png"]
    },
    {
        name: "TransCard Bulgaria",
        domain: "transcard.bg",
        sector: "private",
        economicSector: "Financial",
        threatActor: "selop400500 [Forum member]",
        date: "2024-10-17",
        sourceUrl: "https://leakbase.la/threads/transcard-bulgaria.31367/",
        evidenceImages: ["images/transcard.png"]
    },
    {
        name: "iLife.bg",
        domain: "",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "RansomedVC",
        date: "2023-10-13",
        sourceUrl: "https://darkforums.st/Thread-ilife-bg",
        evidenceImages: ["images/ilife.png"]
    },
    {
        name: "ELD.bg - 578GB",
        domain: "",
        sector: "private",
        economicSector: "Industrial & Supply Chain",
        threatActor: "DragonForce",
        date: "2025-10-11",
        sourceUrl: "http://dragonforxxbp3awc7mzs5dkswrua3znqyx5roefmi4smjrsdi22xwqd.onion/eld.bg/",
        evidenceImages: ["images/eld.png", "images/eld_2.png"]
    },
    {
        name: "MK Brokers",
        domain: "mkb.bg",
        sector: "private",
        economicSector: "Financial",
        threatActor: "LockBit ransomware",
        date: "2021-08-20",
        sourceUrl: "http://lockbit7z355oalq4hiy5p7de64l6rsqutwlvydqje56uvevcc57r6qd.onion/en.mkb.bg/",
        evidenceImages: ["images/en.mkb.bg.png"]
    },
    {
        name: "Generali.bg [861 file]",
        domain: "",
        sector: "private",
        economicSector: "Financial",
        threatActor: "Ics [Forum member]",
        date: "2020",
        sourceUrl: "https://x.com/H4ckManac/status/1760969176372421015",
        evidenceImages: ["images/generali.jpeg"]
    },
    {
        name: "iCard.bg - 21GB & 1,800 records",
        domain: "",
        sector: "private",
        economicSector: "Financial",
        threatActor: "Kyulev [Forum member]",
        date: "2020-11",
        sourceUrl: "https://bird.bg/en/hacker-breached-icard-and-published-the-personal-data-of-1800-individuals/",
        evidenceImages: ["images/icard.webp"]
    },
    {
        name: "National Revenue Agency [5 million individuals]",
        domain: "nra.bg",
        sector: "public",
        economicSector: "Public sector",
        threatActor: "Naglite.com",
        date: "2019-07",
        sourceUrl: "https://haveibeenpwned.com/Breach/BulgarianNationalRevenueAgency",
        evidenceImages: ["images/nra.webp", "images/nra2.jpeg"]
    },
    {
        name: "Videnov.bg - 2 million rows",
        domain: "",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "Z10N [Forum member]",
        date: "2025-08-01",
        sourceUrl: "https://breachforums.hn",
        evidenceImages: ["images/videnov.png"]
    },
    {
        name: "Toplina",
        domain: "pod-toplina.bg",
        sector: "private",
        economicSector: "Financial",
        threatActor: "0x3a [Forum member]",
        date: "2023-02-14",
        sourceUrl: "https://breachforums.hn",
        evidenceImages: ["images/toplina.png"]
    },
    {
        name: "Alessa.bg",
        domain: "",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "CrypticRogue [Forum member]",
        date: "2024-11-07",
        sourceUrl: "https://breachforums.hn",
        evidenceImages: ["images/alessa.png"]
    },
    {
        name: "BGTOLL",
        domain: "bgtoll.bg",
        sector: "public",
        economicSector: "Public sector",
        threatActor: "Enigma_Group [Forum member]",
        date: "2025-04-08",
        sourceUrl: "https://breachforums.hn",
        evidenceImages: ["images/bgtoll.png"]
    },
    {
        name: "Sting AD",
        domain: "stingpharma.com",
        sector: "private",
        economicSector: "Healthcare & Pharma",
        threatActor: "Hunters International",
        date: "2024-03-19",
        sourceUrl: "https://huntersinternational.org",
        evidenceImages: ["images/sting_ad.png"]
    },
    {
        name: "I&G Brokers",
        domain: "iandgbrokers.com",
        sector: "private",
        economicSector: "Financial",
        threatActor: "RansomedVC",
        date: "2023-08-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/i&g_leak.png", "images/i&g_leak_2.png", "images/i&g_leak_3.png"]
    },
    {
        name: "Prosecutor's Office",
        domain: "prb.bg",
        sector: "public",
        economicSector: "Public sector",
        threatActor: "Naglite.com",
        date: "2024-12-01",
        sourceUrl: "https://darkforums.st",
        evidenceImages: ["images/prb.bg.jpeg", "images/prb.bg.2.png"]
    },
    {
        name: "Lev Ins [rows 2,25 million]",
        domain: "lev-ins.com",
        sector: "private",
        economicSector: "Financial",
        threatActor: "Naglite.com",
        date: "2022-12-31",
        sourceUrl: "https://naglite.com",
        evidenceImages: ["images/lev_ins.png"]
    },
    {
        name: "Econt [rows 18, 000]",
        domain: "econt.bg",
        sector: "private",
        economicSector: "Industrial & Supply Chain",
        threatActor: "Frog [Forum member]",
        date: "2020-07-12",
        sourceUrl: "https://leakbase.la",
        evidenceImages: ["images/econt.jpeg"]
    },
    {
        name: "Multiple Bulgarian Sites [bezplatno.bg, bg.elmarkstore.eu, brigadiri.com, casioshop.bg, investclub.bg, comfort.bg, bgtime.tv, address.bg, stylewish.bg]",
        domain: "",
        sector: "private",
        economicSector: "Digital Commerce & Media",
        threatActor: "RansomedVC",
        date: "2023-09",
        sourceUrl: "https://www.predpriemach.com/threads/%D0%A5%D0%B0%D0%BA%D0%B5%D1%80%D1%81%D0%BA%D0%B0-%D0%B3%D1%80%D1%83%D0%BF%D0%B0-%D0%BF%D1%80%D0%BE%D0%B4%D0%B0%D0%B2%D0%B0-%D0%B8%D0%B7%D1%82%D0%B5%D0%BA%D0%BB%D0%B8-%D0%B4%D0%B0%D0%BD%D0%BD%D0%B8-%D0%BE%D1%82-%D0%BD%D1%8F%D0%BA%D0%BE%D0%BB%D0%BA%D0%BE-%D0%B1%D1%8A%D0%BB%D0%B3%D0%B0%D1%80%D1%81%D0%BA%D0%B8-%D1%81%D0%B0%D0%B9%D1%82%D0%B0.91921/",
        evidenceImages: ["images/multiple_bulgarian_sites.png"]
    },
    {
        name: "Multiple BreachForums Leaks [A1 Telecom, baumit.bg, kasida.bg, pilini.bg, airelec.bg, bnm.bg, punto.bg, footshop.bg, districtshoes.bg, ecco.bg, myshoes.bg, ardes.bg, andrews.bg, popolo.bg, ebag.bg, mango.bg, dallbogg.bg, ilife.bg]",
        domain: "",
        sector: "private",
        economicSector: "Digital Commerce & Technology & Telecom",
        threatActor: "RansomedVC",
        date: "2023-09",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/multiple_breachforums_leaks.png"]
    },
    {
        name: "Multiple Sites by 'Soni'",
        domain: "",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "Soni [Forum member]",
        date: "Unknown",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/multiple_sites_soni.png"]
    },
    {
        name: "A1.bg",
        domain: "",
        sector: "private",
        economicSector: "Technology & Telecom",
        threatActor: "Crime [Forum member]",
        date: "2023-08-13",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/a1.bg.png"]
    },
    {
        name: "Ministry of Interior",
        domain: "mvr.bg",
        sector: "public",
        economicSector: "Public sector",
        threatActor: "Crime [Forum member]",
        date: "2023-08-16",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/mvr.bg.png"]
    },
    {
        name: "Ministry of Culture and Foreign Affairs",
        domain: "culture-mfa.bg",
        sector: "public",
        economicSector: "Public sector",
        threatActor: "Crime [Forum member]",
        date: "2023-08-04",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/culture_mfa.bg.png"]
    },
    {
        name: "Multiple Sites by 'crime'",
        domain: "",
        sector: "private",
        economicSector: "Digital Commerce & Media & Financial & Public",
        threatActor: "Crime [Forum member]",
        date: "2023-08",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/multiple_sites_crime.png"]
    },
    {
        name: "Human resources - 3,5GB",
        domain: "hreu.eu",
        sector: "private",
        economicSector: "General Services",
        threatActor: "Funksec",
        date: "2025-02-02",
        sourceUrl: "https://www.ransomware.live/id/aHJldS5ldUBmdW5rc2Vj",
        evidenceImages: ["images/hreu.png"]
    },
    {
        name: "Supreme Administrative Court - 3,5TB",
        domain: "sac.justice.bg",
        sector: "public",
        economicSector: "Public",
        threatActor: "Ransomhouse",
        date: "2025-01-27",
        sourceUrl: "https://www.ransomware.live/id/U3VwcmVtZSBBZG1pbmlzdHJhdGl2ZSBDb3VydCBvZiBCdWxnYXJpYUByYW5zb21ob3VzZQ==",
        evidenceImages: ["images/sac.justice.bg.png"]
    },
    {
        name: "Smart Media Group Bulgaria - 40GB",
        domain: "smartmediagroup.eu",
        sector: "private",
        economicSector: "Media",
        threatActor: "Sarcoma",
        date: "2024-10-09",
        sourceUrl: "sarcomawmawlhov7o5mdhz4eszxxlkyaoiyiy2b5iwxnds2dmb4jakad.onion",
        evidenceImages: ["images/smart_media.png", "images/smart_media2.png"]
    },
    {
        name: "intrama-bg.com",
        domain: "",
        sector: "private",
        economicSector: "Industrial & Supply Chain",
        threatActor: "Stormous",
        date: "2024-07-28",
        sourceUrl: "https://www.ransomware.live/id/aW50cmFtYS1iZ0BzdG9ybW91cw==",
        evidenceImages: ["images/intrama_bg.com.jpg"]
    },
    {
        name: "Regas Energy",
        domain: "regasenergy.com",
        sector: "private",
        economicSector: "Energy sector",
        threatActor: "Monti",
        date: "2024-07-24",
        sourceUrl: "https://www.ransomware.live/id/UmVnYXMgKHJlZ2FzZW5lcmd5LmNvbSlAbW9udGk=",
        evidenceImages: ["images/regas_energy.png"]
    },
    {
        name: "GERB Political Party",
        domain: "gerb.bg",
        sector: "public",
        economicSector: "Public",
        threatActor: "Lockbit3",
        date: "2023-08-01",
        sourceUrl: "https://www.ransomware.live/id/Z2VyYi5iZ0Bsb2NrYml0Mw==",
        evidenceImages: ["images/gerb.png"]
    },
    {
        name: "ecco.bg",
        domain: "",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "RansomedVC [$15,000 ransom]",
        date: "2023-09-26",
        sourceUrl: "https://www.ransomware.live/id/ZWNjby5iZ0ByYW5zb21lZA==",
        evidenceImages: []
    },
    {
        name: "districtshoes.bg",
        domain: "",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "RansomedVC [$15,000 ransom]",
        date: "2023-09-26",
        sourceUrl: "https://www.ransomware.live/id/ZGlzdHJpY3RzaG9lcy5iZ0ByYW5zb21lZA==",
        evidenceImages: []
    },
    {
        name: "footshop.bg",
        domain: "",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "RansomedVC [$15,000 ransom]",
        date: "2023-09-26",
        sourceUrl: "https://www.ransomware.live/id/Zm9vdHNob3AuYmdAcmFuc29tZWQ=",
        evidenceImages: []
    },
    {
        name: "mango.bg",
        domain: "",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "RansomedVC [$15,000 ransom]",
        date: "2023-09-26",
        sourceUrl: "https://www.ransomware.live/id/bWFuZ28uYmdAcmFuc29tZWQ=",
        evidenceImages: []
    },
    {
        name: "bnm.bg",
        domain: "",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "RansomedVC [$14,000 ransom]",
        date: "2023-09-26",
        sourceUrl: "https://www.ransomware.live/id/Ym5tLmJnQHJhbnNvbWVk",
        evidenceImages: []
    },
    {
        name: "Punto.bg",
        domain: "",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "RansomedVC [$30,000 ransom]",
        date: "2023-09-26",
        sourceUrl: "https://www.ransomware.live/id/UHVudG8uYmdAcmFuc29tZWQ=",
        evidenceImages: []
    },
    {
        name: "Baumit Bulgaria",
        domain: "baumit.bg",
        sector: "private",
        economicSector: "Industrial & Supply Chain",
        threatActor: "RansomedVC [$100,000 ransom]",
        date: "2023-10-13",
        sourceUrl: "https://www.ransomware.live/id/QmF1bWl0IEJ1bGdhcmlhQHJhbnNvbWVk",
        evidenceImages: ["images/baumit.bg.png"]
    },
    {
        name: "Swipe.bg",
        domain: "",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "RansomedVC [$50,000 ransom]",
        date: "2023-09-04",
        sourceUrl: "https://www.ransomware.live/id/U3dpcGUuYmdAcmFuc29tZWQ=",
        evidenceImages: []
    },
    {
        name: "airelec.bg",
        domain: "",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "RansomedVC [$8,000 ransom]",
        date: "2023-09-09",
        sourceUrl: "https://www.ransomware.live/id/YWlyZWxlYy5iZ0ByYW5zb21lZA==",
        evidenceImages: []
    },
    {
        name: "myshoes.bg",
        domain: "",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "RansomedVC [$15,000 ransom]",
        date: "2023-09-25",
        sourceUrl: "https://www.breachsense.com/breaches/myshoes-data-breach/",
        evidenceImages: []
    },
    {
        name: "ardes.bg",
        domain: "",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "RansomedVC [$50,000 ransom]",
        date: "2023-09-25",
        sourceUrl: "https://www.ransomware.live/id/YXJkZXMuYmdAcmFuc29tZWQ=",
        evidenceImages: []
    },
    {
        name: "popolo.bg",
        domain: "",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "RansomedVC [$15,000 ransom]",
        date: "2023-09-25",
        sourceUrl: "https://www.ransomware.live/id/cG9wb2xvLmJnQHJhbnNvbWVk",
        evidenceImages: []
    },
    {
        name: "andrews.bg",
        domain: "",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "RansomedVC [$15,000 ransom]",
        date: "2023-09-25",
        sourceUrl: "https://www.ransomware.live/id/YW5kcmV3cy5iZ0ByYW5zb21lZA==",
        evidenceImages: []
    },
    {
        name: "ebag.bg",
        domain: "",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "RansomedVC [$15,000 ransom]",
        date: "2023-09-25",
        sourceUrl: "https://www.ransomware.live/id/ZWJhZy5iZ0ByYW5zb21lZA==",
        evidenceImages: []
    },
    {
        name: "Мениджмънт Бизнес Машин ООД - 900GB",
        domain: "mbm-bg.com",
        sector: "private",
        economicSector: "Technology & Telecom",
        threatActor: "BlackShrantac",
        date: "2025-11-14",
        sourceUrl: "http://b2ykcy2gcug4gnccm6hnrb5xapnresmyjjqgvhafaypppwgo4feixwyd.onion/targets/25",
        evidenceImages: ["images/m&bm.png"]
    },
    {
        name: "abv.bg",
        domain: "",
        sector: "private",
        economicSector: "Technology & Telecom",
        threatActor: "RaidForums member",
        date: "2021-08-28",
        sourceUrl: "https://www.breachsense.com/breaches/abv-bg/",
        evidenceImages: []
    },
    {
        name: "audio-guide.bg",
        domain: "",
        sector: "private",
        economicSector: "General Services",
        threatActor: "RaidForums member",
        date: "2021-12-16",
        sourceUrl: "https://www.breachsense.com/breaches/audio-guide-bg/",
        evidenceImages: []
    },
    {
        name: "AutoCatalog.bg",
        domain: "autocatalog.bg",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "Lucifer",
        date: "2023-07-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/Lucifer_big_dbs.png"]
    },
    {
        name: "Bulgarian Association of Supplementary Pension Security Companies",
        domain: "assoc.pension.bg",
        sector: "private",
        economicSector: "Financial",
        threatActor: "Lucifer",
        date: "2023-07-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/Lucifer_big_dbs.png"]
    },
    {
        name: "Rabota.bg",
        domain: "rabota.bg",
        sector: "private",
        economicSector: "General Services",
        threatActor: "Lucifer",
        date: "2023-07-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/Lucifer_big_dbs.png"]
    },
    {
        name: "Technical University Sofia e-learning",
        domain: "e-sopko.tu-sofia.bg",
        sector: "public",
        economicSector: "Public sector",
        threatActor: "Lucifer",
        date: "2023-07-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/Lucifer_big_dbs.png"]
    },
    {
        name: "BG-Planet.com",
        domain: "bg-planet.com",
        sector: "private",
        economicSector: "Media",
        threatActor: "Lucifer",
        date: "2023-07-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/Lucifer_big_dbs.png"]
    },
    {
        name: "EBC Brakes Bulgaria",
        domain: "ebcbrakes.bg",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "Lucifer",
        date: "2023-07-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/Lucifer_big_dbs.png"]
    },
    {
        name: "Blog.bg",
        domain: "blog.bg",
        sector: "private",
        economicSector: "Media",
        threatActor: "Lucifer",
        date: "2023-07-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/Lucifer_big_dbs.png"]
    },
    {
        name: "Fagor Bulgaria",
        domain: "fagor.bg",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "Lucifer",
        date: "2023-07-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/Lucifer_big_dbs.png"]
    },
    {
        name: "Patient.bg",
        domain: "patient.bg",
        sector: "private",
        economicSector: "Healthcare & Pharma",
        threatActor: "Lucifer",
        date: "2023-07-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/Lucifer_big_dbs.png"]
    },
    {
        name: "ESI Store",
        domain: "esistore.bg",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "Lucifer",
        date: "2023-07-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/Lucifer_big_dbs.png"]
    },
    {
        name: "Sea Jobs Bulgaria",
        domain: "seajobs.bg",
        sector: "private",
        economicSector: "General Services",
        threatActor: "Lucifer",
        date: "2023-07-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/Lucifer_big_dbs.png"]
    },
    {
        name: "DNT Bulgaria",
        domain: "dnt.bg",
        sector: "private",
        economicSector: "Financial",
        threatActor: "Lucifer",
        date: "2023-07-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/Lucifer_big_dbs.png"]
    },
    {
        name: "Linkstar Bulgaria",
        domain: "linkstar.bg",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "Lucifer",
        date: "2023-07-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/Lucifer_big_dbs.png"]
    },
    {
        name: "Ski.bg",
        domain: "ski.bg",
        sector: "private",
        economicSector: "Media",
        threatActor: "Lucifer",
        date: "2023-07-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/Lucifer_big_dbs.png"]
    },
    {
        name: "SuperPhone Bulgaria",
        domain: "superphone.bg",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "Lucifer",
        date: "2023-07-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/Lucifer_big_dbs.png"]
    },
    {
        name: "SMC-BG.com",
        domain: "smc-bg.com",
        sector: "private",
        economicSector: "Other",
        threatActor: "Lucifer",
        date: "2023-07-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/Lucifer_big_dbs.png"]
    },
    {
        name: "IP Mart Bulgaria",
        domain: "ipmart-bg.com",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "Lucifer",
        date: "2023-07-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/Lucifer_big_dbs.png"]
    },
    {
        name: "BG Pochivka",
        domain: "bgpochivka.eu",
        sector: "private",
        economicSector: "General Services",
        threatActor: "Lucifer",
        date: "2023-07-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/Lucifer_big_dbs.png"]
    },
    {
        name: "Portokal Games",
        domain: "games.portokal-bg.net",
        sector: "private",
        economicSector: "Media",
        threatActor: "Lucifer",
        date: "2023-07-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/Lucifer_big_dbs.png"]
    },
    {
        name: "Iron Maiden Bulgaria Fan Club",
        domain: "ironmaiden-bg.com",
        sector: "private",
        economicSector: "Media",
        threatActor: "Lucifer",
        date: "2023-07-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/Lucifer_big_dbs.png"]
    },
    {
        name: "Meloman Bulgaria",
        domain: "meloman-bg.com",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "Lucifer",
        date: "2023-07-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/Lucifer_big_dbs.png"]
    },
    {
        name: "Trimonium HR Recruitment",
        domain: "trimonium-bg.com",
        sector: "private",
        economicSector: "General Services",
        threatActor: "Lucifer",
        date: "2023-07-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/Lucifer_big_dbs.png"]
    },
    {
        name: "Bulgarian Property UK",
        domain: "bulgarianpropertyuk.com",
        sector: "private",
        economicSector: "General Services",
        threatActor: "Lucifer",
        date: "2023-07-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/Lucifer_big_dbs.png"]
    },
    {
        name: "Walkers Bulgaria Foundation",
        domain: "walkersbg.org",
        sector: "private",
        economicSector: "General Services",
        threatActor: "Lucifer",
        date: "2023-07-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/Lucifer_big_dbs.png"]
    },
    {
        name: "BG Sail Enthusiasts",
        domain: "bg-sail.org",
        sector: "private",
        economicSector: "General Services",
        threatActor: "Lucifer",
        date: "2023-07-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/Lucifer_big_dbs.png"]
    },
    {
        name: "Kniga BG Online Bookstore",
        domain: "knigabg.com",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "Lucifer",
        date: "2023-07-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/Lucifer_big_dbs.png"]
    },
    {
        name: "5KM Run Bulgaria",
        domain: "5kmrun.bg",
        sector: "private",
        economicSector: "General Services",
        threatActor: "GOD user [Forum member]",
        date: "2024-02-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/380_bg_dbs.png"]
    },
    {
        name: "Arena BG",
        domain: "arenabg.com",
        sector: "private",
        economicSector: "Media",
        threatActor: "GOD user [Forum member]",
        date: "2024-02-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/380_bg_dbs.png"]
    },
    {
        name: "Avto Magazin Bulgaria",
        domain: "avtomagazin.bg",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "GOD user [Forum member]",
        date: "2024-02-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/380_bg_dbs.png"]
    },
    {
        name: "BG Ben UK Newspaper",
        domain: "bgben.co.uk",
        sector: "private",
        economicSector: "Media",
        threatActor: "GOD user [Forum member]",
        date: "2024-02-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/380_bg_dbs.png"]
    },
    {
        name: "Bis.bg Social Network",
        domain: "bis.bg",
        sector: "private",
        economicSector: "Media",
        threatActor: "GOD user [Forum member]",
        date: "2024-02-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/380_bg_dbs.png"]
    },
    {
        name: "Box Office Bulgaria",
        domain: "boxoffice.bg",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "GOD user [Forum member]",
        date: "2024-02-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/380_bg_dbs.png"]
    },
    {
        name: "Cabinet.bg Virtual Math",
        domain: "cabinet.bg",
        sector: "private",
        economicSector: "General Services",
        threatActor: "GOD user [Forum member]",
        date: "2024-02-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/380_bg_dbs.png"]
    },
    {
        name: "Classroom Bulgaria",
        domain: "classroom.bg",
        sector: "private",
        economicSector: "General Services",
        threatActor: "GOD user [Forum member]",
        date: "2024-02-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/380_bg_dbs.png"]
    },
    {
        name: "UNWE Careers Portal",
        domain: "careers.unwe.bg",
        sector: "public",
        economicSector: "Public sector",
        threatActor: "GOD user [Forum member]",
        date: "2024-02-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/380_bg_dbs.png"]
    },
    {
        name: "Daxy Financial Services [235,000 records]",
        domain: "daxy.com",
        sector: "private",
        economicSector: "Financial",
        threatActor: "GOD user [Forum member]",
        date: "2021-04",
        sourceUrl: "https://data-wells.niamonx.io/Breach/Daxy.com",
        evidenceImages: ["images/daxy.png"]
    },
    {
        name: "Detelina Bulgaria",
        domain: "detelina-bg.com",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "GOD user [Forum member]",
        date: "2024-02-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/380_bg_dbs.png"]
    },
    {
        name: "UARD E-learning Platform",
        domain: "e-uard.bg",
        sector: "public",
        economicSector: "Public sector",
        threatActor: "GOD user [Forum member]",
        date: "2024-02-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/380_bg_dbs.png"]
    },
    {
        name: "Journey.bg Travel Forum",
        domain: "journey.bg",
        sector: "private",
        economicSector: "Media",
        threatActor: "GOD user [Forum member]",
        date: "2024-02-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/380_bg_dbs.png"]
    },
    {
        name: "Investor.bg Forum",
        domain: "forum.investor.bg",
        sector: "private",
        economicSector: "Financial",
        threatActor: "GOD user [Forum member]",
        date: "2024-02-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/380_bg_dbs.png"]
    },
    {
        name: "FP League Bulgaria",
        domain: "fpleague.bg",
        sector: "private",
        economicSector: "Media",
        threatActor: "GOD user [Forum member]",
        date: "2024-02-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/380_bg_dbs.png"]
    },
    {
        name: "GSS Healthcare Software",
        domain: "gss.bg",
        sector: "private",
        economicSector: "Healthcare & Pharma",
        threatActor: "GOD user [Forum member]",
        date: "2024-02-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/380_bg_dbs.png"]
    },
    {
        name: "Jelezaria Hardware Store",
        domain: "jelezaria.bg",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "GOD user [Forum member]",
        date: "2024-02-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/380_bg_dbs.png"]
    },
    {
        name: "LS BG Maritime Training",
        domain: "lsbg.net",
        sector: "private",
        economicSector: "General Services",
        threatActor: "GOD user [Forum member]",
        date: "2024-02-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/380_bg_dbs.png"]
    },
    {
        name: "Market.bg Marketplace",
        domain: "market.bg",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "GOD user [Forum member]",
        date: "2024-02-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/380_bg_dbs.png"]
    },
    {
        name: "Metal Best Bulgaria",
        domain: "metal.best.bg",
        sector: "private",
        economicSector: "Industrial & Supply Chain",
        threatActor: "GOD user [Forum member]",
        date: "2024-02-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/380_bg_dbs.png"]
    },
    {
        name: "Mining.bg Crypto Equipment",
        domain: "mining.bg",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "GOD user [Forum member]",
        date: "2024-02-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/380_bg_dbs.png"]
    },
    {
        name: "Na Edro Bulgaria B2B",
        domain: "naedro.bg",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "GOD user [Forum member]",
        date: "2024-02-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/380_bg_dbs.png"]
    },
    {
        name: "National Focal Point on Drugs",
        domain: "nfp-drugs.bg",
        sector: "public",
        economicSector: "Public sector",
        threatActor: "GOD user [Forum member]",
        date: "2024-02-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/380_bg_dbs.png"]
    },
    {
        name: "Offnews.bg News Portal",
        domain: "offnews.bg",
        sector: "private",
        economicSector: "Media",
        threatActor: "GOD user [Forum member]",
        date: "2024-02-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/380_bg_dbs.png"]
    },
    {
        name: "PC Mania Bulgaria",
        domain: "pcmania.bg",
        sector: "private",
        economicSector: "Media",
        threatActor: "GOD user [Forum member]",
        date: "2024-02-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/380_bg_dbs.png"]
    },
    {
        name: "Portal BG Directory",
        domain: "portal-bg.com",
        sector: "private",
        economicSector: "Media",
        threatActor: "GOD user [Forum member]",
        date: "2024-02-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/380_bg_dbs.png"]
    },
    {
        name: "Rechnik BG Dictionary",
        domain: "rechnik-bg.com",
        sector: "private",
        economicSector: "Media",
        threatActor: "GOD user [Forum member]",
        date: "2024-02-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/380_bg_dbs.png"]
    },
    {
        name: "Karta Shop Bulgaria",
        domain: "shop.karta.bg",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "GOD user [Forum member]",
        date: "2024-02-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/380_bg_dbs.png"]
    },
    {
        name: "Snimki Online Photo Printing",
        domain: "snimkionline.bg",
        sector: "private",
        economicSector: "General Services",
        threatActor: "GOD user [Forum member]",
        date: "2024-02-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/380_bg_dbs.png"]
    },
    {
        name: "Svatba BG Wedding Planning",
        domain: "svatba-bg.net",
        sector: "private",
        economicSector: "General Services",
        threatActor: "GOD user [Forum member]",
        date: "2024-02-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/380_bg_dbs.png"]
    },
    {
        name: "Theatre Art Bulgaria",
        domain: "theatre.art.bg",
        sector: "private",
        economicSector: "Media",
        threatActor: "GOD user [Forum member]",
        date: "2024-02-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/380_bg_dbs.png"]
    },
    {
        name: "VIP Oferta Travel [350,000 accounts]",
        domain: "vipoferta.bg",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "GOD user [Forum member]",
        date: "2021-04",
        sourceUrl: "https://data-wells.niamonx.io/Breach/VipOferta.bg",
        evidenceImages: ["images/vipoferta.png"]
    },
    {
        name: "VSU Civil Engineering University",
        domain: "vsu.bg",
        sector: "public",
        economicSector: "Public sector",
        threatActor: "GOD user [Forum member]",
        date: "2024-02-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/380_bg_dbs.png"]
    },
    {
        name: "Pigeon Bulgaria Community",
        domain: "pigeon-bg.com",
        sector: "private",
        economicSector: "Media",
        threatActor: "GOD user [Forum member]",
        date: "2024-02-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/380_bg_dbs.png"]
    },
    {
        name: "Vestnik Reklama Bulgaria",
        domain: "vestnikreklama.bg",
        sector: "private",
        economicSector: "Media",
        threatActor: "GOD user [Forum member]",
        date: "2024-02-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/380_bg_dbs.png"]
    },
    {
        name: "Bulgaria Shop Germany",
        domain: "bulgaria-shop.de",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "GOD user [Forum member]",
        date: "2024-02-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/380_bg_dbs.png"]
    },
    {
        name: "Journey Bulgaria Travel Portal",
        domain: "en.journey.bg",
        sector: "private",
        economicSector: "Media",
        threatActor: "GOD user [Forum member]",
        date: "2024-02-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/380_bg_dbs.png"]
    },
    {
        name: "ADV Bulgaria Forum (Archived)",
        domain: "forumold.adv-bulgaria.com",
        sector: "private",
        economicSector: "Media",
        threatActor: "GOD user [Forum member]",
        date: "2024-02-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/380_bg_dbs.png"]
    },
    {
        name: "Inox Bulgaria Steel Manufacturer",
        domain: "inoxbulgaria.com",
        sector: "private",
        economicSector: "Industrial & Supply Chain",
        threatActor: "GOD user [Forum member]",
        date: "2024-02-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/380_bg_dbs.png"]
    },
    {
        name: "Mushroom Bulgaria Supplier",
        domain: "mushroom-bulgaria.com",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "GOD user [Forum member]",
        date: "2024-02-21",
        sourceUrl: "https://breachforums.is",
        evidenceImages: ["images/380_bg_dbs.png"]
    },
    {
        name: "offroad-bulgaria.com",
        domain: "offroad-bulgaria.com",
        sector: "private",
        economicSector: "Media",
        threatActor: "Unidentified",
        date: "2019-10-28",
        sourceUrl: "https://www.ransomlook.io/leaks",
        evidenceImages: ["images/offroad-bulgaria.png"]
    },
    {
        name: "Shtora.Bg [32,000 records]",
        domain: "shtora.bg",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "Unidentified",
        date: "2024-05-23",
        sourceUrl: "https://www.ransomlook.io/leaks",
        evidenceImages: ["images/shtora.png"]
    },
    {
        name: "Sladur.bg [190,000 records]",
        domain: "sladur.bg",
        sector: "private",
        economicSector: "Media",
        threatActor: "Unidentified",
        date: "2021-01-13",
        sourceUrl: "https://www.techsolvency.com/passwords/hashes-org/leaks.txt",
        evidenceImages: ["images/sladur.png"]
    },
    {
        name: "Estore.sbs.bg [9,000 records]",
        domain: "estore.sbs.bg",
        sector: "private",
        economicSector: "Industrial",
        threatActor: "Unidentified",
        date: "2020-10-25",
        sourceUrl: "https://www.techsolvency.com/passwords/",
        evidenceImages: ["images/estore.sbs.png"]
    },
    {
        name: "Freelance.bg",
        domain: "freelance.bg",
        sector: "private",
        economicSector: "General Services",
        threatActor: "Unidentified",
        date: "2021-01-13",
        sourceUrl: "https://www.techsolvency.com/passwords/",
        evidenceImages: ["images/freelance.png"]
    },
    {
        name: "Dell-bg.net [9,000 records]",
        domain: "dell-bg.net",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "Unidentified",
        date: "2021-01-13",
        sourceUrl: "https://www.techsolvency.com/passwords/",
        evidenceImages: ["images/dell-bg.png"]
    },
    {
        name: "Forcom-bg.com [2,000 records]",
        domain: "forcom-bg.com",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "Unidentified",
        date: "2020-10-10",
        sourceUrl: "https://www.techsolvency.com/passwords/",
        evidenceImages: ["images/forcom-bg.png"]
    },
    {
        name: "DentStore.bg [15,000 accounts]",
        domain: "dentstore.bg",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "Unidentified",
        date: "Unknown",
        sourceUrl: "https://data-wells.niamonx.io/Breach/DentStore.bg",
        evidenceImages: ["images/dentstore.png"]
    },
    {
        name: "Bania.bg [3,000 accounts]",
        domain: "bania.bg",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "Unidentified",
        date: "Unknown",
        sourceUrl: "https://data-wells.niamonx.io/Breach/Bania.bg",
        evidenceImages: ["images/bania.png", "images/bania.bg.2.png"]
    },
    {
        name: "E-learning.econt-bg.com",
        domain: "e-learning.econt-bg.com",
        sector: "private",
        economicSector: "Supply Chain",
        threatActor: "Unidentified",
        date: "Unknown",
        sourceUrl: "https://data-wells.niamonx.io/Breach/E-learning.econt-bg.com",
        evidenceImages: ["images/e-learning.econt-bg.png"]
    },
    {
        name: "VarnaBroker.com",
        domain: "varnabroker.com",
        sector: "private",
        economicSector: "Financial",
        threatActor: "Chucky [Forum member]",
        date: "2021-12-19",
        sourceUrl: "https://leakbase.la/threads/varnabroker-com.877/",
        evidenceImages: ["images/varnabroker.png"]
    },
    {
        name: "bamf.bg",
        domain: "bamf.bg",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "Z10N Predator [Forum member]",
        date: "2025-08-01",
        sourceUrl: "https://breachforums.bf/showthread.php?tid=180482&highlight=.bg",
        evidenceImages: ["images/bamf.bg.png"]
    },
    {
        name: "corporate.offex.bg",
        domain: "corporate.offex.bg",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "Fancy Bears [APT 28]",
        date: "2025-03-25",
        sourceUrl: "https://breachforums.st",
        evidenceImages: ["images/corporate.offex.bg.png"]
    },
    {
        name: "Forum.BG [75,000 rows]",
        domain: "Forum.BG",
        sector: "private",
        economicSector: "Financial",
        threatActor: "NULLLLLL [Forum member]",
        date: "2025-03-21",
        sourceUrl: "http://breachforums.hn",
        evidenceImages: ["images/forum.bg.png"]
    },
    {
        name: "notino.bg [116,000 records]",
        domain: "notino.bg",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "fuckoverflow [Forum member]",
        date: "2025-08-02",
        sourceUrl: "https://darkforums.st",
        evidenceImages: ["images/notino.bg.jpg"]
    },
    {
        name: "pangratz.bg",
        domain: "pangratz.bg",
        sector: "private",
        economicSector: "Industrial",
        threatActor: "Michaell [Forum member]",
        date: "2025-08-07",
        sourceUrl: "https://breachforums.bf/showthread.php?tid=181161&highlight=.bg",
        evidenceImages: ["images/pangratz.bg.png"]
    },
    {
        name: "superdoc.bg [1,200 accounts]",
        domain: "superdoc.bg",
        sector: "private",
        economicSector: "Healthcare & Pharma",
        threatActor: "fuckoverflow [Forum member]",
        date: "2025-08-01",
        sourceUrl: "https://darkforums.st",
        evidenceImages: ["images/superdoc.bg.png"]
    },
    {
        name: "yavor.bg",
        domain: "yavor.bg",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "NarodArmiya [Forum member]",
        date: "2025-08-19",
        sourceUrl: "https://www.segabg.com/hot/category-economy/ruska-hakerska-armiya-iznudva-institucii-i-firmi-po-cyal-svyat",
        evidenceImages: ["images/yavor1.png", "images/yavor2.png"]
    },
    {
        name: "Technical University Sofia",
        domain: "tu-sofia.bg",
        sector: "public",
        economicSector: "Public administration",
        threatActor: "NarodArmiya [Forum member]",
        date: "2025-08-19",
        sourceUrl: "https://www.segabg.com/hot/category-economy/ruska-hakerska-armiya-iznudva-institucii-i-firmi-po-cyal-svyat",
        evidenceImages: ["images/yavor1.png"]
    },
    {
        name: "Bulgarian ISP [Unknown]",
        domain: "",
        sector: "private",
        economicSector: "Telecom",
        threatActor: "Z10N Predator [Forum member]",
        date: "2025-07-28",
        sourceUrl: "http://breachforums.hn/Thread-Internal-Access-to-Bulgaria-Internet-Provider",
        evidenceImages: ["images/bulgaria_ISP.png"]
    },
    {
        name: "Econt Express",
        domain: "Econt",
        sector: "private",
        economicSector: "Supply Chain",
        threatActor: "Z10N Predator [Forum member]",
        date: "2025-07-28",
        sourceUrl: "http://breachforums.hn",
        evidenceImages: ["images/econt.png"]
    },
    {
        name: "Lukoil Bulgaria",
        domain: "lukoil.bg",
        sector: "private",
        economicSector: "Energy",
        threatActor: "Z10N Predator [Forum member]",
        date: "2025-07-28",
        sourceUrl: "http://breachforums.hn",
        evidenceImages: ["images/lukoil.bg.png"]
    },
    {
        name: "Sofia Municipality - GPS System [inspectorat-so.org]",
        domain: "inspectorat-so.org",
        sector: "public",
        economicSector: "Public administration",
        threatActor: "Z10N Predator [Forum member]",
        date: "2025-07-29",
        sourceUrl: "http://breachforums.hn",
        evidenceImages: ["images/sofia_municipality.png"]
    },
    {
        name: "А1 Bulgaria",
        domain: "",
        sector: "private",
        economicSector: "Telecom",
        threatActor: "Wieko [Forum member]",
        date: "2024-12",
        sourceUrl: "https://breachforums.bf/showthread.php?tid=180447&highlight=.bg",
        evidenceImages: ["images/a1.png"]
    },
    {
        name: "Solarpro Holding",
        domain: "solarpro.bg",
        sector: "private",
        economicSector: "Energy",
        threatActor: "Coinbase Cartel",
        date: "2024-12",
        sourceUrl: "http://fjg4zi4opkxkvdz7mvwp7h6goe4tcby3hhkrz43pht4j3vakhy75znyd.onion/companies/solarpro",
        evidenceImages: ["images/solarpro_holding.png"]
    },
    {
        name: "blitz.bg",
        domain: "blitz.bg",
        sector: "private",
        economicSector: "Media",
        threatActor: "kisel228 [Forum member]",
        date: "2023-07",
        sourceUrl: "https://breachforums.bf/showthread.php?tid=101945&highlight=blitz.bg",
        evidenceImages: ["images/blitz.bg.png"]
    },
    {
        name: "Bulgarian Registry Agency",
        domain: "",
        sector: "public",
        economicSector: "Public administration",
        threatActor: "OpenBullet [Forum member]",
        date: "2024-09",
        sourceUrl: "https://breachforums.bf/showthread.php?tid=170816&highlight=.bg",
        evidenceImages: ["images/Bulgarian_Registry_Agency.png"]
    },
    {
        name: "FastFood.bg [12 000 Addresses]",
        domain: "fastfood.bg",
        sector: "private",
        economicSector: "General Services",
        threatActor: "Ransomed.vc Affiliate",
        date: "2023-06",
        sourceUrl: "https://breachforums.bf/showthread.php?tid=75316&highlight=.bg",
        evidenceImages: ["images/FastFood.bg.png"]
    }
    {
        name: "In Time [2,300,000 rows]",
        domain: "intime.bg",
        sector: "private",
        economicSector: "Supply Chain",
        threatActor: "johngotti",
        date: "2025-12-16",
        sourceUrl: "https://breachstars.io/topic/intimebg-courier-and-logistic-ywt06xyvfnap",
        evidenceImages: ["images/intime.bg.png", "images/intime.bg_2.png", "images/intime.bg_3.png"]
    }   
    {
        name: "Ozone [100,000 rows]",
        domain: "ozone.bg",
        sector: "private",
        economicSector: "Digital Commerce",
        threatActor: "johngotti",
        date: "2025-12-11",
        sourceUrl: "https://breachstars.io/topic/ozonebg-online-retailer-qbcteb5limr1",
        evidenceImages: ["images/ozone.bg.png", "images/ozone.bg_2.png", "images/ozone.bg_3.png"]
    }
    {
        name: "Interlogistica [4,600,000 rows]",
        domain: "interlogistica.bg",
        sector: "private",
        economicSector: "Supply Chain",
        threatActor: "carlogambino",
        date: "2025-12-22",
        sourceUrl: "https://breachforums.bf/Thread-DATABASE-Interlogistica-bg-Bulgaria-4MIL",
        evidenceImages: ["images/interlogistica.bg.png"]
    }

];
