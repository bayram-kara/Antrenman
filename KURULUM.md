# Ev Antrenmanı – Kurulum Rehberi

Bu klasör, telefonuna uygulama gibi kurabileceğin çevrimdışı çalışan bir web uygulaması (PWA).
Veriler **sadece telefonunda** tutulur. Sunucuya hiçbir kişisel veri gitmez.

## 1. Dosyaları hazırla (Windows)

1. İndirdiğin `ev-antrenman.zip` dosyasına sağ tıkla, **Tümünü ayıkla** de.
2. Açılan klasörde şunlar olmalı: `index.html`, `sw.js`, `manifest.webmanifest`, `icons` ve `fonts` klasörleri.

## 2. GitHub Pages'e yükle (ücretsiz, bir kere yapılır)

1. https://github.com adresinden ücretsiz hesap aç.
2. Sağ üstteki **+** → **New repository**.
   - Repository name: `antrenman`
   - **Public** seçili kalsın (ücretsiz yayın için gerekli; sadece uygulama kodu görünür, verilerin görünmez).
   - **Create repository**.
3. Açılan sayfada **uploading an existing file** bağlantısına tıkla.
4. Ayıkladığın klasörün **içindeki her şeyi** (klasörün kendisini değil) sürükleyip bırak. `icons` ve `fonts` klasörleri de gitmeli.
5. En altta **Commit changes**.
6. Üst menüden **Settings** → sol menüde **Pages**.
   - Source: **Deploy from a branch**
   - Branch: **main**, klasör: **/ (root)** → **Save**.
7. 1–2 dakika bekle, sayfayı yenile. Üstte adresin çıkar:
   `https://KULLANICIADIN.github.io/antrenman/`

## 3. iPhone'a kur

1. Bu adresi **Safari**'de aç (Chrome değil, iPhone'da ana ekrana kurulum Safari'den en sorunsuz).
2. Alttaki **Paylaş** butonu → **Ana Ekrana Ekle** → **Ekle**.
3. Bundan sonra uygulamayı **hep ana ekrandaki ikondan** aç.
   Safari sekmesiyle ana ekran uygulamasının hafızası ayrıdır; Safari'de girdiğin veriler uygulamada görünmez.
4. İlk açılıştan sonra internet olmadan da çalışır.

## 4. Yedekleme (önemli)

Veriler sadece telefonda olduğu için telefon kaybolur/sıfırlanırsa gider.

- **Kurallar** sekmesi → **Yedeği kaydet** → paylaşım menüsünden **Dosyalara Kaydet** → **iCloud Drive**.
- 14 günden uzun süre yedek almazsan Bugün ekranında sarı hatırlatma çıkar.
- Geri yüklemek için: **Yedekten geri yükle** → iCloud Drive'daki `antrenman-yedek-....json` dosyasını seç.

Yeni telefona geçerken de aynı yol: eskisinde yedek al, yenisinde uygulamayı kur, yedeği geri yükle.

## 5. Güncelleme yapmak

Uygulamada değişiklik yaptırdığında:

1. Yeni `index.html` dosyasını al.
2. `sw.js` dosyasını Not Defteri ile aç, en üstteki `const VERSION = "v1";` satırındaki numarayı bir artır (`v2`, `v3`...), kaydet.
3. GitHub'da repository sayfasında **Add file** → **Upload files** ile bu iki dosyayı yükle → **Commit changes**.
4. Telefonda uygulamayı kapatıp aç. Yeni sürüm genelde ikinci açılışta görünür.

Verilerin güncellemeden etkilenmez.

## Sınırlar

- Bildirim göndermez.
- Apple Sağlık'a (adım, akıllı tartı) erişemez. Bunlar için ileride yerel uygulama (Expo) gerekir.
