export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tagline?: string;
  description: string;
  image: string;
  iconName: string;
  details: string[];
  technical?: string;
  security?: string;
  whyPoints?: { title: string; desc: string }[];
  advantage: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  image: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export const SITE_INFO = {
  name: "Topcuoğlu Peyzaj",
  tagline: "Estetik Tasarım, Kusursuz Uygulama.",
  phone1: "0537 319 37 66",
  phone1Raw: "+905373193766",
  phone2: "0505 357 79 00",
  phone2Raw: "+905053577900",
  whatsapp: "905373193766",
  email: "topcuoglupeyzaj@gmail.com",
  address: "Kutlu Mahallesi Dereboyu Caddesi 456/2 Sokak Huzur Apt. No:4 Daire:21 Mamak / Ankara",
  city: "Mamak / Ankara",
  workingHours: "Pazartesi - Cumartesi: 08:00 - 19:00, Pazar: Randevu ile",
  creatorCredit: "𝖳𝖠𝖭 𝖬𝖤𝖣𝖸𝖠 𝖳𝖠𝖲𝖠𝖱𝖨𝖬 Tarafından Kurulmuştur.",
  copyright: "2026 Topcuoğlu Peyzaj Tüm Hakları Saklıdır©.",
  logoUrl: "https://static.wixstatic.com/media/e732c3_29023dd530de4672942d7f28ab623295~mv2.jpg/v1/crop/x_0,y_599,w_1024,h_177/fill/w_320,h_55,al_c,q_85,enc_avif,quality_auto/e732c3_29023dd530de4672942d7f28ab623295~mv2.jpg",
  badgeUrl: "https://static.wixstatic.com/media/e732c3_279f4faae6c74608904719ce171df364~mv2.png/v1/fill/w_49,h_28,al_c,q_85,enc_avif,quality_auto/e732c3_279f4faae6c74608904719ce171df364~mv2.png"
};

export const SERVICES: ServiceItem[] = [
  {
    id: "bahçe-düzenleme",
    slug: "bahce-bakimi",
    title: "Bahçe Bakımı",
    subtitle: "Profesyonel Bahçe Bakımı ve Peyzaj Yönetimi",
    tagline: "Doğanın Estetiğini Bilimle Buluşturuyoruz",
    description: "Bahçeniz sadece bitkilerden oluşan bir alan değil, evinizin yaşayan bir parçasıdır. Topcuoğlu Peyzaj olarak, yeşil alanlarınızın her mevsim sağlıklı, formda ve estetik görünmesi için biyolojik ihtiyaçlara dayalı, profesyonel bakım takvimleri uyguluyoruz.",
    image: "https://static.wixstatic.com/media/e732c3_a1c5698b0a2f474197eedea810b6a818~mv2.jpg/v1/fill/w_600,h_400,al_c,q_85,enc_avif,quality_auto/e732c3_a1c5698b0a2f474197eedea810b6a818~mv2.jpg",
    iconName: "Trees",
    details: [
      "Periyodik Çim Bakımı: Doğru yükseklikte biçim, kenar düzeltme ve havalandırma işlemleri.",
      "Bitki Besleme ve Gübreleme: Toprak analizine uygun organik ve mineral gübre takviyeleri ile canlılık.",
      "Form ve Budama: Ağaç ve çalı gruplarının türüne özgü tekniklerle budanarak gençleştirilmesi ve şekillendirilmesi.",
      "Bitki Sağlığı (İlaçlama): Mevsimsel hastalık ve zararlılara karşı koruyucu ve tedavi edici müdahaleler.",
      "Yabani Ot Kontrolü: Estetiği bozan ve bitki gelişimini engelleyen istenmeyen otların temizliği."
    ],
    technical: "Mevsim geçişlerinde (İlkbahar ve Sonbahar) yapılan ağır bakımlarla bitkilerinizin kışa ve yaza dirençli girmesini sağlıyoruz.",
    advantage: "Bahçenizi tesadüflere değil, uzman ellere emanet ederek doğanın huzurunu kesintisiz yaşayın."
  },
  {
    id: "peyzaj",
    slug: "peyzaj-duzenleme",
    title: "Peyzaj Düzenleme",
    subtitle: "Hayalinizdeki Bahçeyi Mimari Estetikle İnşa Ediyoruz",
    tagline: "Estetik, Fonksiyon ve Doğallık Bir Arada",
    description: "Peyzaj düzenleme, sadece bitki dikmek değil; yaşam alanınıza kimlik kazandıran bir mühendislik ve sanat dalıdır. Topcuoğlu Peyzaj olarak, arazinizin yapısını, iklim şartlarını ve sizin estetik beklentilerinizi sentezleyerek, yaşayan ve değer kazanan dış mekanlar tasarlıyoruz.",
    image: "https://static.wixstatic.com/media/e732c3_b9363eaa18bf44f8a60b3c1824550eeb~mv2.jpg/v1/fill/w_600,h_400,al_c,q_85,enc_avif,quality_auto/Gemini_Generated_Image_irg3yhirg3yhirg3_edited.jpg",
    iconName: "Flower2",
    details: [
      "Projelendirme ve Tasarım: Bahçenizin potansiyelini ortaya çıkaran 2D ve 3D görselleştirme çalışmaları.",
      "Sert Zemin Uygulamaları: Yürüyüş yolları, doğal taş kaplamalar, dekoratif duvarlar ve teras alanları.",
      "Bitkisel Tasarım: İklim uyumlu ağaç, çalı ve çiçek gruplarının estetik bir kompozisyonla yerleşimi.",
      "Otomatik Sulama Sistemleri: Su tasarrufu sağlayan, akıllı ve bitki ihtiyacına göre programlanmış altyapı kurulumu.",
      "Aydınlatma Tasarımı: Bahçenizin gece estetiğini ve güvenliğini sağlayan profesyonel ışıklandırma çözümleri.",
      "Rulo Çim Uygulaması: Hızlı ve kusursuz bir yeşil alan için yüksek kaliteli hazır rulo çim serme."
    ],
    advantage: "Sıfırdan bir doğa harikası yaratıyor veya mevcut alanınızı modernize ederek mülkünüze prestij katıyoruz."
  },
  {
    id: "i̇laçlama",
    slug: "ilaclama",
    title: "İlaçlama",
    subtitle: "İç ve Dış Mekan İlaçlama Hizmetleri",
    tagline: "Sağlık Bakanlığı Onaylı Güvenli Dezenfeksiyon",
    description: "Açık ve kapalı alanlarda konforunuzu bozan, bitki sağlığını tehdit eden ve hijyen riski oluşturan zararlılarla mücadele ediyoruz. Topcuoğlu Peyzaj olarak, sadece görünen haşereleri yok etmekle kalmıyor, biyolojik döngülerini inceleyerek uzun vadeli koruma sağlıyoruz.",
    image: "https://static.wixstatic.com/media/e732c3_c40e0bc3c11a4a6f8e9ebb22204913f1~mv2.jpg/v1/fill/w_600,h_400,al_c,q_85,enc_avif,quality_auto/e732c3_c40e0bc3c11a4a6f8e9ebb22204913f1~mv2.jpg",
    iconName: "ShieldCheck",
    details: [
      "Bahçe ve Peyzaj İlaçlaması: Sivrisinek, kene, karınca, yaprak biti ve bitki hastalıklarına karşı mevsimsel koruma.",
      "Haşere Kontrolü: İç ve dış mekanlarda yürüyen ve uçan haşerelere (akrep, kırkayak, örümcek vb.) karşı bariyer ilaçlama.",
      "Kemirgen Kontrolü: Yapı çevresinde güvenli ve profesyonel kemirgen istasyonları kurulumu.",
      "ULV Sisleme ve Pulverizasyon: Geniş alanlarda en uç noktalara ulaşan, yüksek etkili teknolojik uygulama yöntemleri.",
      "Periyodik Takip: Sorunun tekrarlanmaması için düzenli kontrol ve önleyici müdahaleler."
    ],
    security: "Sağlık Bakanlığı onaylı, doğaya ve insan sağlığına dost ürünler. Evcil hayvan ve bitki dostu özel solüsyonlar. Sertifikalı ve uzman uygulama ekibi.",
    advantage: "Zararlılardan arınmış, sevdiklerinizle huzurla vakit geçirebileceğiniz steril bir çevre sunuyoruz."
  },
  {
    id: "kanalizasyon-temizliği",
    slug: "kanalizasyon-temizligi",
    title: "Kanalizasyon Temizliği",
    subtitle: "Altyapı ve Atık Yönetimi Çözümleri",
    tagline: "Kırmadan, Dökmeden İleri Teknoloji Tıkanıklık Açma",
    description: "Kanalizasyon sistemleri, yapınızın görünmeyen ancak en hayati altyapısını oluşturur. Zamanla biriken katı atıklar, yağ tabakaları ve çevresel faktörler; kötü kokulara, tıkanıklıklara ve ciddi su baskınlarına neden olabilir. Topcuoğlu Peyzaj olarak, ileri teknoloji ekipmanlarımızla altyapı sorunlarınızı kalıcı olarak çözüme kavuşturuyoruz.",
    image: "https://static.wixstatic.com/media/e732c3_5c6b92f1c0774227b575be67b43c77d1~mv2.jpg/v1/fill/w_600,h_400,al_c,q_85,enc_avif,quality_auto/e732c3_5c6b92f1c0774227b575be67b43c77d1~mv2.jpg",
    iconName: "Wrench",
    details: [
      "Kameralı Görüntüleme: Tıkanıklığın yerini ve nedenini kırmadan, dökmeden son teknoloji robot kameralarla nokta atışı tespit ediyoruz.",
      "Yüksek Basınçlı Kanal Yıkama: Boru hattı içinde biriken kireç, yağ ve tortuları yüksek basınçlı su jetleri (Kuka sistemi) ile temizleyerek ilk günkü debisine kavuşturuyoruz.",
      "Rögar (Logar) Temizliği: Rögar bacalarında biriken ve sistemin çalışmasını engelleyen atıkları vakumlu vidanjör sistemleriyle tahliye ediyoruz.",
      "Periyodik Bakım: Altyapının ömrünü uzatmak ve ani taşmaların önüne geçmek için planlı temizlik programları uyguluyoruz.",
      "Koku Giderme: Kanalizasyon kaynaklı ağır kokuların tespiti ve biyolojik çözümlerle tamamen ortadan kaldırılması."
    ],
    technical: "Kırma-dökme yapmadan, çevreye ve yapıya zarar vermeyen uygulama teknikleri. İş sağlığı ve güvenliği standartlarına tam uyum. 7/24 acil müdahale imkanı.",
    advantage: "Altyapı sorunlarınızı büyümeden çözüyor, sizi hem maliyetli onarımlardan hem de hijyen risklerinden koruyoruz."
  },
  {
    id: "mikrobiyal-gübre",
    slug: "mikrobiyal-gubre",
    title: "Mikrobiyal Gübre",
    subtitle: "Mikrobiyal Gübre Uygulaması",
    tagline: "Doğal Mikroorganizmalarla Yaşayan Canlı Toprak",
    description: "Geleneksel kimyasal gübrelerin aksine, Topcuoğlu Peyzaj olarak toprağınızın ekosistemini canlandırmaya odaklanıyoruz. Mikrobiyal gübreleme hizmetimizle, toprağa yararlı bakteriler ve mantarlar (mikoriza) aşılayarak, bitkilerinizin kendi besinini çok daha verimli almasını sağlayan yaşayan bir toprak yapısı inşa ediyoruz.",
    image: "https://static.wixstatic.com/media/e732c3_052f263475344430b65b088405524540~mv2.jpg/v1/fill/w_600,h_400,al_c,q_85,enc_avif,quality_auto/e732c3_052f263475344430b65b088405524540~mv2.jpg",
    iconName: "Sprout",
    details: [
      "Kök Bölgesi (Rhizosphere) Canlandırma: Bitki kökleriyle simbiyotik ilişki kuran mikroorganizmaların toprağa enjekte edilmesi.",
      "Azot Fiksasyonu: Havadaki azotu toprağa bağlayan bakteriler sayesinde bitkilerin doğal yolla beslenmesini sağlama.",
      "Toprak Rehabilitasyonu: Kimyasal kullanımından dolayı yorulmuş ve verimsizleşmiş toprakların biyolojik olarak iyileştirilmesi.",
      "Besin Emilim Desteği: Toprakta var olan ancak bitki tarafından alınamayan fosfor ve potasyum gibi elementlerin çözünerek bitkiye kazandırılması.",
      "Direnç Artırıcı Uygulamalar: Yararlı mikroorganizmalar sayesinde bitkilerin kuraklığa, aşırı sıcaklara ve hastalıklara karşı bağışıklığının güçlendirilmesi."
    ],
    whyPoints: [
      { title: "%100 Doğal ve Organik", desc: "Kimyasal kalıntı bırakmaz, yeraltı sularını kirletmez." },
      { title: "Sürdürülebilir Verim", desc: "Toprağın yapısını bozmaz, aksine her geçen yıl daha zengin hale getirir." },
      { title: "Ekonomik ve Etkili", desc: "Bitkinin gübre ihtiyacını doğal yollarla karşıladığı için uzun vadede maliyetleri düşürür." }
    ],
    advantage: "Bahçenizde sadece dış görünüşü değil, toprağın altındaki yaşamı da iyileştirerek kalıcı ve sağlıklı bir yeşil alan yaratıyoruz."
  },
  {
    id: "ağaç-budama",
    slug: "agac-budama",
    title: "Ağaç Budama",
    subtitle: "Ağaçlarınızın Sağlığı ve Güvenliği İçin Uzman Dokunuş",
    tagline: "Form Verme, Gençleştirme ve Güvenli Budama",
    description: "Budama, bir ağacın sadece boyunu kısaltmak değil; onun ömrünü uzatan, verimini artıran ve estetik formunu koruyan hayati bir operasyondur. Topcuoğlu Peyzaj olarak, ağacın türüne, yaşına ve mevsimine uygun tekniklerle, bitki fizyolojisine zarar vermeden profesyonel budama hizmeti sunuyoruz.",
    image: "https://static.wixstatic.com/media/e732c3_f6f4b0be30f84dd6bc7ce32fc466d843~mv2.jpg/v1/fill/w_600,h_400,al_c,q_85,enc_avif,quality_auto/e732c3_f6f4b0be30f84dd6bc7ce32fc466d843~mv2.jpg",
    iconName: "Scissors",
    details: [
      "Sağlık ve Gençleştirme Budaması: Kurumuş, hastalıklı veya birbirine sürten dalların temizlenerek ağacın enerjisinin sağlıklı kısımlara aktarılması.",
      "Form ve Estetik Budama (Topiary): Bahçenizin genel mimarisine uygun olarak ağaç ve çalı gruplarına dekoratif şekiller verilmesi.",
      "Güvenlik Budaması: Fırtınalarda devrilme riski taşıyan veya elektrik tellerine, bina cephelerine zarar veren yüksek dalların güvenli bir şekilde alınması.",
      "Meyve Budaması: Meyve ağaçlarında güneşlenme ve hava sirkülasyonunu artırarak maksimum verim ve kalite sağlanması.",
      "Yara Bakımı ve Macunlama: Kesim yapılan bölgelerin hastalık kapmaması için özel bitki macunları ile dezenfekte edilmesi."
    ],
    technical: "Yüksek ağaçlar için sepetli vinç ve profesyonel tırmanış ekipmanları kullanımı. Ağacın doğal büyüme dengesini bozmayan stratejik kesim noktaları. Budama sonrası çıkan atıkların alandan uzaklaştırılarak bahçenin temiz teslim edilmesi.",
    advantage: "Yanlış budama ağacı öldürür, doğru budama ise onu yeniden canlandırır. Ağaçlarınızı uzman ellere emanet edin."
  },
  {
    id: "çatı-oluk-temizliği",
    slug: "cati-oluk-temizligi",
    title: "Çatı, Oluk Temizliği",
    subtitle: "Profesyonel Çatı ve Oluk Temizliği: Evinizi Tepeden Tırnağa Koruyun",
    tagline: "Tıkanıklık Giderme, İniş Borusu Kontrolü ve Onarım",
    description: "Evinizin çatısı ve oluk sistemi, yapınızı yağmur, kar ve nemin yıkıcı etkilerinden koruyan ilk savunma hattıdır. Zamanla biriken yapraklar, tozlar ve kuş yuvaları bu sistemi tıkayarak geri dönüşü zor hasarlara yol açabilir. Biz, Topcuoğlu Peyzaj olarak, sizi tehlikeli merdiven tırmanışlarından kurtarıyor; çatınızı tertemiz, güvenli ve uzun ömürlü hale getiriyoruz.",
    image: "https://static.wixstatic.com/media/e732c3_70f10703814e4a0db47125ade9de792c~mv2.jpg/v1/fill/w_600,h_400,al_c,q_85,enc_avif,quality_auto/e732c3_70f10703814e4a0db47125ade9de792c~mv2.jpg",
    iconName: "Home",
    details: [
      "Detaylı Atık Tahliyesi: Oluklardaki tüm yaprak, dal ve çamur birikintileri el yordamı ve özel vakumlarla temizlenir.",
      "İniş Borusu Kontrolü: Sadece yatay oluklar değil, dikey iniş borularının da açık olduğundan emin olmak için basınçlı su testi yapılır.",
      "Küçük Onarımlar: Temizlik esnasında fark edilen sızıntı yapan ek yerleri veya gevşemiş kelepçeler ekibimizce sabitlenir.",
      "Çatı Yüzey Bakımı: Çatınızdaki kiremit kırıkları veya membran hasarları raporlanır, isteğe bağlı olarak yosun temizliği gerçekleştirilir."
    ],
    whyPoints: [
      { title: "Temel Hasarlarını Önler", desc: "Tıkanan oluklar suyu tahliye edemez ve su doğrudan bina temeline sızarak çatlaklara yol açar." },
      { title: "Dış Cepheyi Korur", desc: "Taşan sular duvarlarınızda leke, küf ve boya kabarmalarına neden olur." },
      { title: "Haşerelerle Mücadele", desc: "Birikmiş nemli atıklar, böcekler ve kemirgenler için mükemmel bir yuvalama alanıdır." }
    ],
    advantage: "Küçük bir temizlik maliyeti, büyük bir çatı onarım maliyetinden her zaman daha ekonomiktir."
  },
  {
    id: "ofis-temizliği",
    slug: "ofis-temizligi",
    title: "Ofis Temizliği",
    subtitle: "Ofis ve Büro Temizliği: Prestijli ve Sağlıklı Çalışma Alanları",
    tagline: "Kurumsal Hijyen, Periyodik Bakım ve Sterilizasyon",
    description: "Başarılı bir iş gününün anahtarı, temiz ve düzenli bir çalışma ortamıdır. Topcuoğlu Peyzaj olarak, çalışanlarınızın sağlığını koruyan ve işletmenizin profesyonel imajını yansıtan kusursuz ofis temizliği çözümleri sunuyoruz.",
    image: "https://static.wixstatic.com/media/e732c3_ef5a344edf2145be944c15ef897888ad~mv2.jpg/v1/fill/w_600,h_400,al_c,q_85,enc_avif,quality_auto/e732c3_ef5a344edf2145be944c15ef897888ad~mv2.jpg",
    iconName: "Building2",
    details: [
      "Masa ve Ortak Alan Temizliği: Bilgisayar ekranları, klavyeler, telefonlar ve masalar hassas yüzey temizleyicilerle dezenfekte edilir.",
      "Zemin ve Halı Bakımı: Halıflekslerin vakumlanması, sert zeminlerin (granit, lamine, mermer) endüstriyel makinelerle parlatılması.",
      "Mutfak ve Yemek Alanı Hijyeni: Çay/kahve istasyonları, buzdolabı dış yüzeyleri ve ortak kullanım alanlarının tam dezenfeksiyonu.",
      "Çöp ve Atık Yönetimi: Çöp kutularının boşaltılması, torbaların yenilenmesi ve geri dönüşüm ayrıştırması.",
      "Cam ve Bölme Temizliği: Cam bölmeler, aynalar ve dış cephe camlarının iz bırakmadan silinmesi."
    ],
    whyPoints: [
      { title: "Mesai Saatlerine Uyum", desc: "İş akışınızı bozmadan, size en uygun sabah veya akşam saatlerinde hizmet veriyoruz." },
      { title: "Yüksek Hijyen Standartları", desc: "Çok temas edilen noktalar (kapı kolları, asansörler vb.) özel solüsyonlarla sterilize edilir." },
      { title: "Güvenlik ve Gizlilik", desc: "Gizli dokümanlara ve eşyalara karşı tam bir profesyonellik ve gizlilik prensibi." }
    ],
    advantage: "Müşterilerinizi pırıl pırıl bir ofiste ağırlamanız ve ekibinizin yüksek motivasyonla çalışması için biz buradayız."
  },
  {
    id: "i̇nşaat-temizliği",
    slug: "insaat-temizligi",
    title: "İnşaat Temizliği",
    subtitle: "İnşaat ve Tadilat Sonrası Temizlik: Molozdan Konfora Geçiş",
    tagline: "Kaba ve İnce Detaylı Anahtar Teslim Temizlik",
    description: "Hayalinizdeki evi veya ofisi inşa ettiniz ya da yenilediniz; ancak geriye kalan boya damlaları, alçı kalıntıları ve her yere sinmiş o ince inşaat tozu canınızı sıkmasın! Topcuoğlu Peyzaj olarak, şantiye görüntüsünü dakikalar içinde sıcak bir yuvaya veya profesyonel bir çalışma alanına dönüştürüyoruz.",
    image: "https://static.wixstatic.com/media/e732c3_174acd30c8be4ac5985f46266ae64194~mv2.jpeg/v1/fill/w_600,h_400,al_c,q_85,enc_avif,quality_auto/e732c3_174acd30c8be4ac5985f46266ae64194~mv2.jpeg",
    iconName: "Sparkles",
    details: [
      "Boya ve Alçı Kalıntılarının Temizliği: Camlarda, çerçevelerde ve zeminlerde kalan boya, harç ve silikon atıklarını yüzeye zarar vermeden özel kimyasallarla çıkarıyoruz.",
      "İnce Toz Arındırma: Duvarlardan tavanlara, dolap içlerinden priz deliklerine kadar sinen mikro tozları endüstriyel vakumlarla çekiyoruz.",
      "Zemin Parlatma: Fayans, mermer veya parke üzerindeki inşaat pusunu siliyor, zeminlerinizi ilk günkü parlaklığına kavuşturuyoruz.",
      "Banyo ve Mutfak Dezenfeksiyonu: Yeni takılan bataryalar, lavabolar ve dolaplardaki etiketleri söküyor, tüm alanı kullanıma hazır hale getiriyoruz."
    ],
    whyPoints: [
      { title: "Özel Ekipman", desc: "Sanayi tipi vakumlar, buhar makineleri ve yüzey spesifik kazıyıcılar kullanıyoruz." },
      { title: "Hız ve Verimlilik", desc: "Siz taşınma planları yaparken birkaç saat içinde alanı tamamen oturulabilir hale getiriyoruz." },
      { title: "Yüzey Koruması", desc: "Mermerinizi yakmıyor, parkenizi kabartmıyoruz; doğru kimyasalla koruyoruz." }
    ],
    advantage: "İnşaat sonrası temizlik detaylarda gizlidir ve biz o detayları uzman ekibimizle kusursuzca çözüyoruz."
  }
];

export const WHY_US_ITEMS = [
  {
    title: "Uzman ve Deneyimli Kadro",
    description: "Yılların getirdiği tecrübe ve teknik bilgi birikimiyle, bahçenizdeki her detayı profesyonel bir bakış açısıyla yönetiyoruz.",
    iconName: "Award"
  },
  {
    title: "Bilimsel ve Doğal Yaklaşım",
    description: "Canlı mikrobiyal gübre ve toprak düzenleyiciler kullanarak, sadece estetik değil, sürdürülebilir ve sağlıklı ekosistemler kuruyoruz.",
    iconName: "Leaf"
  },
  {
    title: "Dakik ve Kesintisiz Hizmet",
    description: "Söz verdiğimiz zamanda kapınızdayız. Periyodik bakımlarımız ve hızlı operasyon sürecimizle bahçenizi hiçbir zaman sahipsiz bırakmıyoruz.",
    iconName: "Clock"
  },
  {
    title: "A'dan Z'ye Tam Çözüm",
    description: "Peyzajdan ilaçlamaya, sulama sistemlerinden sıhhi tesisata kadar tüm ihtiyaçlarınızı tek elden, entegre bir şekilde karşılıyoruz.",
    iconName: "CheckCircle2"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Peyzaj ve Bahçe Düzenleme",
    category: "Peyzaj Tasarımı",
    imageUrl: "https://static.wixstatic.com/media/e732c3_c33a326197b842d78f73ecd14e7a9a74~mv2.png/v1/fit/w_900,h_600,q_85,enc_avif,quality_auto/e732c3_c33a326197b842d78f73ecd14e7a9a74~mv2.png",
    description: "Modern villa bahçesinde estetik çim alanları, bitki grupları ve dekoratif taş dizimi."
  },
  {
    id: "g2",
    title: "Bahçe Yürüyüş Yolu ve Çim Serimi",
    category: "Sert Zemin & Çim",
    imageUrl: "https://static.wixstatic.com/media/e732c3_b1f11722a20e492f9c28e1fa3687f60c~mv2.png/v1/fit/w_900,h_600,q_85,enc_avif,quality_auto/e732c3_b1f11722a20e492f9c28e1fa3687f60c~mv2.png",
    description: "Doğal taş yürüyüş yolları ve hazır rulo çim uygulaması ile bütünleşen dış mekan."
  },
  {
    id: "g3",
    title: "Taş Duvar ve Teras Bitkilendirme",
    category: "Peyzaj Mimarisi",
    imageUrl: "https://static.wixstatic.com/media/e732c3_923902bb85364c43a6d30d8b1d381365~mv2.png/v1/fit/w_900,h_600,q_85,enc_avif,quality_auto/e732c3_923902bb85364c43a6d30d8b1d381365~mv2.png",
    description: "Eğimli arazide kademeli taş duvar uygulaması ve erozyonu önleyen özel köklü çalılar."
  },
  {
    id: "g4",
    title: "Otomatik Sulama ve Çim Bakımı",
    category: "Sulama Sistemleri",
    imageUrl: "https://static.wixstatic.com/media/e732c3_3199fa351f1d4e2c85632de6c5d05e17~mv2.png/v1/fit/w_900,h_600,q_85,enc_avif,quality_auto/e732c3_3199fa351f1d4e2c85632de6c5d05e17~mv2.png",
    description: "Gömülü pop-up sprinkler otomatik sulama sistemi testi ve homojen su dağılımı."
  },
  {
    id: "g5",
    title: "Ağaç Budama ve Form Verme",
    category: "Ağaç Bakımı",
    imageUrl: "https://static.wixstatic.com/media/e732c3_4d17037958ef4e03b19646969cb5ecb9~mv2.png/v1/fit/w_900,h_600,q_85,enc_avif,quality_auto/e732c3_4d17037958ef4e03b19646969cb5ecb9~mv2.png",
    description: "Yüksek ağaçlarda güvenlik budaması, kuru dal temizliği ve estetik form çalışması."
  },
  {
    id: "g6",
    title: "Modern Peyzaj & Gece Aydınlatması",
    category: "Peyzaj Tasarımı",
    imageUrl: "https://static.wixstatic.com/media/e732c3_b9363eaa18bf44f8a60b3c1824550eeb~mv2.jpg/v1/fill/w_900,h_600,al_c,q_85,enc_avif,quality_auto/Gemini_Generated_Image_irg3yhirg3yhirg3_edited.jpg",
    description: "Dış mekan aydınlatma armatürleri ile karanlıkta da yaşayan büyüleyici bahçeler."
  },
  {
    id: "g7",
    title: "Bitki Besleme ve Canlı Mikrobiyal Gübre",
    category: "Bitki Sağlığı",
    imageUrl: "https://static.wixstatic.com/media/e732c3_052f263475344430b65b088405524540~mv2.jpg/v1/fill/w_900,h_600,al_c,q_85,enc_avif,quality_auto/e732c3_052f263475344430b65b088405524540~mv2.jpg",
    description: "Toprak rehabilitasyonu ve mikroorganizma aşılaması sonrası kök gelişimi."
  },
  {
    id: "g8",
    title: "İlaçlama ve Dezenfeksiyon Uygulaması",
    category: "Hijyen & İlaçlama",
    imageUrl: "https://static.wixstatic.com/media/e732c3_c40e0bc3c11a4a6f8e9ebb22204913f1~mv2.jpg/v1/fill/w_900,h_600,al_c,q_85,enc_avif,quality_auto/e732c3_c40e0bc3c11a4a6f8e9ebb22204913f1~mv2.jpg",
    description: "Sağlık Bakanlığı onaylı haşere kontrolü ve bariyer ilaçlama uygulaması."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b1",
    slug: "bahce-tasariminda-dikkat-edilmesi-gerekenler",
    title: "Bahçe Tasarımında Dikkat Edilmesi Gerekenler",
    author: "Topcuoğlu Peyzaj",
    date: "7 Şubat 2026",
    readTime: "3 dakikada okunur",
    category: "Peyzaj Rehberi",
    summary: "Bahçe tasarımında dikkate almanız gereken temel unsurlar, işlevsellik, toprak analizi ve su yönetimi prensipleri.",
    image: "https://static.wixstatic.com/media/e732c3_b9363eaa18bf44f8a60b3c1824550eeb~mv2.jpg/v1/fill/w_800,h_500,al_c,q_85,enc_avif,quality_auto/Gemini_Generated_Image_irg3yhirg3yhirg3_edited.jpg",
    content: [
      "Bahçe tasarımında dikkate almanız gereken birkaç temel unsur vardır. Bu unsurlar, bahçenizin genel görünümünü ve işlevselliğini doğrudan etkiler.",
      "1. Amacın Belirlenmesi: Bahçenizin ne amaçla kullanılacağını belirlemek, tasarım sürecinin ilk adımıdır. Bahçeniz dinlenme alanı mı, çocuklar için oyun alanı mı yoksa sebze ve meyve yetiştirmek için mi kullanılacak? Amaç belirlemek, tasarımın yönünü şekillendirir.",
      "2. Alan Analizi: Bahçenizin büyüklüğü, şekli ve mevcut bitki örtüsü gibi faktörleri analiz etmek önemlidir. Alanın güneş alma durumu, rüzgar yönü ve toprağın kalitesi gibi unsurlar, hangi bitkilerin ve tasarım öğelerinin seçileceğini belirler.",
      "3. Bitki Seçimi: Bahçenizde kullanacağınız bitkiler, tasarımın en önemli parçalarından biridir. Yerel iklim koşullarına uygun bitkiler seçmek, bakım sürecini kolaylaştırır. Ayrıca, bitkilerin büyüme alışkanlıklarını ve renklerini göz önünde bulundurarak bir uyum sağlamak da önemlidir.",
      "4. Su Yönetimi: Bahçenizde su kaynaklarını etkili bir şekilde yönetmek, hem bitkilerin sağlığı hem de su tasarrufu açısından önemlidir. Otomatik sulama sistemleri veya yağmur suyu toplama unsurları su yönetimini kolaylaştırır.",
      "5. Denge ve Uyum: Farklı yüksekliklerde bitkiler, çeşitli renkler ve dokular kullanarak dinamik bir görünüm elde edebilirsiniz. Yürüyüş yolları ve oturma alanları da bu estetik dengeyi desteklemelidir."
    ]
  },
  {
    id: "b2",
    slug: "pest-kontrolu-bahcenizi-korumanin-yollari",
    title: "Pest Kontrolü: Bahçenizi Korumanın Yolları",
    author: "Topcuoğlu Peyzaj",
    date: "7 Şubat 2026",
    readTime: "2 dakikada okunur",
    category: "Bitki Sağlığı",
    summary: "Zararlılar neden tehdit oluşturur? Doğal yöntemlerle mücadele, düşman böcekler ve biyolojik bariyerler.",
    image: "https://static.wixstatic.com/media/e732c3_c40e0bc3c11a4a6f8e9ebb22204913f1~mv2.jpg/v1/fill/w_800,h_500,al_c,q_85,enc_avif,quality_auto/e732c3_c40e0bc3c11a4a6f8e9ebb22204913f1~mv2.jpg",
    content: [
      "Bahçeniz, doğanın sunduğu güzellikleri ve taze ürünleri barındıran bir yaşam alanıdır. Ancak bu güzellikleri korumak için zararlılara karşı tedbirli olmak gerekir.",
      "Zararlılar Neden Tehdit Oluşturur?",
      "• Böcekler: Yaprak bitleri, beyaz sinekler ve kırmızı örümcekler bitkilerin özsuyunu emerek fotosentez gücünü azaltır.",
      "• Kemirgenler: Sıçan ve köstebekler köklere zarar vererek çim tabakasında çökme oluşturur.",
      "• Mantarlar: Külleme, pas ve kök çürüklüğü gibi mantari hastalıklar yeşil örtüyü hızla sarartır.",
      "Doğal Yöntemlerle Mücadele: Yararlı böceklerin ekosisteme kazandırılması, mikrobiyal direnç aşılamaları ve Sağlık Bakanlığı onaylı kokusuz biyolojik preparatlarla hem ailenizi hem doğayı koruyabilirsiniz."
    ]
  },
  {
    id: "b3",
    slug: "cim-bicme-ipuclari-ile-saglikli-bahceler",
    title: "Çim Biçme İpuçları ile Sağlıklı Bahçeler",
    author: "Topcuoğlu Peyzaj",
    date: "7 Şubat 2026",
    readTime: "2 dakikada okunur",
    category: "Çim Bakımı",
    summary: "Düzenli çim biçmenin püf noktaları, mevsimsel kesim yükseklikleri ve yabani ot kontrolü.",
    image: "https://static.wixstatic.com/media/e732c3_a1c5698b0a2f474197eedea810b6a818~mv2.jpg/v1/fill/w_800,h_500,al_c,q_85,enc_avif,quality_auto/e732c3_a1c5698b0a2f474197eedea810b6a818~mv2.jpg",
    content: [
      "Çim biçmek, bahçenizin görünümünü ve sağlığını doğrudan etkileyen en temel işlemdir. Düzenli çim biçimi köklerin kardeşlenmesini ve çimin kadife gibi sıklaşmasını sağlar.",
      "Çim Biçmenin Faydaları:",
      "• Estetik Görünüm: Düzenli biçim, bahçenizin her zaman temiz ve bakımlı kalmasını sağlar.",
      "• Sağlıklı Büyüme: Çimlerinizi düzenli olarak biçmek, köklerin daha derinleşmesine ve kuraklığa dirençli olmasına yardımcı olur.",
      "• Yabancı Ot Kontrolü: Doğru yükseklikte kesim, yabani tohumların güneş almasını engelleyerek otlanmayı baskılar.",
      "Mevsimsel Zamanlama:",
      "• İlkbahar: Çim büyüme dönemine girdiğinde bıçakları çok derine indirmeden ilk form biçimi yapılır.",
      "• Yaz: Sıcak havalarda çimi güneşe karşı korumak için kesim yüksekliği 1-2 cm daha yukarıda tutulmalıdır.",
      "• Sonbahar: Kış soğuklarına ve kar örtüsüne girmeden önce havalandırma ve son koruyucu biçim uygulanır."
    ]
  }
];

export const ABOUT_TEXT = {
  paragraphs: [
    "Topcuoğlu Peyzaj, kurulduğu günden bu yana yeşile olan tutkusunu profesyonel tekniklerle birleştirerek, yaşam alanlarınıza değer katmak amacıyla yola çıkmıştır. Sadece bir bahçe düzenleme firması olmanın ötesinde; toprağın dilinden anlayan, doğanın dengesine saygı duyan ve estetiği mühendislikle harmanlayan bir çözüm ortağıyız.",
    "Peyzaj tasarımından periyodik bahçe bakımına, bitki sağlığından teknik tesisat çözümlerine kadar geniş bir yelpazede hizmet sunuyoruz. Modern yaşamın getirdiği yoğun tempoda, insanların nefes alabileceği, doğayla bağ kurabileceği \"yaşayan mekanlar\" inşa etmek en büyük önceliğimizdir.",
    "Sektördeki farkımızı, geleneksel yöntemleri modern teknolojiyle birleştirerek ortaya koyuyoruz. Bahçelerinizde kullandığımız canlı mikrobiyal gübre ve toprak düzenleyici uygulamalarımızla, bitki sağlığını temelinden güçlendiriyor ve sürdürülebilir bir ekosistem oluşturuyoruz. Sadece görsel bir güzellik değil, toprağın altında da işleyen sağlıklı bir yapı vaat ediyoruz."
  ],
  mission: "Müşterilerimizin hayallerindeki dış mekanları, bilimsel veriler ve estetik değerler ışığında gerçeğe dönüştürmek; yaşam kalitesini artıran, çevre dostu alanlar yaratmak.",
  vision: "Yenilikçi uygulamalarımız ve sürdürülebilir çevre bilincimizle, peyzaj ve açık alan yönetimi sektöründe öncü, güvenilir ve ilham veren bir marka olmaya devam etmek.",
  closing: "Topcuoğlu Peyzaj olarak biz, her bahçenin bir ruhu olduğuna inanıyoruz. Siz hayal edin, biz doğanın imkanlarıyla o ruhu canlandıralım."
};

export const PRIVACY_POLICY = `Topcuoğlu Peyzaj olarak kişisel verilerinizin güvenliği ve gizliliği bizim için en öncelikli konudur.

1. Veri Sorumlusu
Bu bilgilendirme, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, veri sorumlusu sıfatıyla Topcuoğlu Peyzaj tarafından yapılmaktadır.

2. Toplanan Kişisel Veriler
Web sitemiz üzerinden keşif talebi, randevu alma ve iletişim formları aracılığıyla adınız, soyadınız, telefon numaranız, e-posta adresiniz ve talep ettiğiniz hizmete ilişkin adres bilgileri toplanmaktadır.

3. Kişisel Verilerin İşlenme Amaçları
• Hizmet taleplerinize hızlı geri dönüş sağlanması ve ücretsiz keşif planlaması
• Randevu takviminin oluşturulması ve hizmet operasyonunun yürütülmesi
• Müşteri memnuniyetinin ölçülmesi ve yasal yükümlülüklerin yerine getirilmesi

4. Veri Güvenliği ve Üçüncü Kişilerle Paylaşım
Toplanan veriler hiçbir suretle ticari amaçla üçüncü kişilere satılmaz veya devredilmez. Yalnızca yasal zorunluluk halinde yetkili adli/idari mercilerle paylaşılabilir.`;

export const COOKIE_POLICY = `Topcuoğlu Peyzaj olarak web sitemizde size en iyi kullanıcı deneyimini sunmak, site trafiğini analiz etmek ve hizmetlerimizi ilgi alanlarınıza göre kişiselleştirmek amacıyla çerezlerden faydalanıyoruz.

1. Çerez (Cookie) Nedir?
Çerezler, ziyaret ettiğiniz web siteleri tarafından tarayıcınız aracılığıyla cihazınıza yerleştirilen küçük veri dosyalarıdır.

2. Kullanılan Çerez Türleri
• Zorunlu Çerezler: Web sitesinin temel fonksiyonlarının doğru çalışması için gereklidir.
• Performans ve Analiz Çerezleri: Ziyaretçi sayıları ve sayfa trafiğini ölçerek sitemizi geliştirmemize yardımcı olur.
• Tercih Çerezleri: Form tercihlerinizin ve site ayarlarınızın hatırlanmasını sağlar.

3. Çerez Tercihlerini Yönetme
Tarayıcı ayarlarınız üzerinden çerezleri dilediğiniz zaman engelleyebilir veya silebilirsiniz.`;
