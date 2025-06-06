// src/data/projectsData.ts
export interface Project {
    title: string;
    description: string;
    tech: string[];
    // Artık previewUrl eklendi (örneğin YouTube embed linki, gif URL’si veya iframe’le gösterilebilecek adres)
    previewUrl: string;
    // Geliştirme notları
    devNotes: string;
    // Eklenecek diğer notlar (isteğe bağlı)
    extraNotes?: string;
    // GitHub adresi
    githubUrl: string;
}

export const projectsData: Project[] = [
    {
        title: 'E-Commerce Platform',
        description:
            'A modern e-commerce solution with real-time inventory management and payment processing.',
        tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
        // Örnek bir YouTube embed linki (iframe olarak gömülebilir)
        previewUrl: 'https://www.youtube.com/embed/VIDEO_ID_ECOMMERCE',
        devNotes:
            '• Kurulum: Node.js (v14+) ve PostgreSQL (v13+) ile geliştirme ortamı kuruldu.\n' +
            '• Backend: Express + Sequelize ile REST API endpoint’leri yazıldı.\n' +
            '• Gerçek zamanlı stok takibi için WebSocket (Socket.io) entegre edildi.\n' +
            '• Ödeme altyapısı: Stripe SDK kullanılarak ödeme entegrasyonu yapıldı.\n' +
            '• Deployment: AWS EC2 üzerinde Docker container olarak çalışır hale getirildi.',
        extraNotes:
            '• İleride çoklu dil desteği (i18n) eklenebilir.\n' +
            '• Performans optimizasyonu için Redis caching planlanıyor.',
        githubUrl: 'https://github.com/example/ecommerce-platform',
    },
    {
        title: 'Task Management App',
        description:
            'Collaborative task management tool with real-time updates and team collaboration features.',
        tech: ['TypeScript', 'React', 'Express', 'Socket.io'],
        previewUrl: 'https://www.example.com/path/to/taskmanager-preview.gif',
        devNotes:
            '• Kullanıcı kimlik doğrulama: JWT tabanlı auth sistemi tasarlandı.\n' +
            '• Gerçek zamanlı güncellemeler: Socket.io ile task listesi anlık güncellendi.\n' +
            '• Frontend: React Hooks ve Context API kullanıldı.\n' +
            '• Veri tabanı: MongoDB + Mongoose ile dinamik şema yapısı oluşturuldu.\n' +
            '• Deployment: Heroku üzerinde CI/CD pipeline kuruldu.',
        extraNotes:
            '• İleride mobil uygulama sürümü (React Native) geliştirilebilir.\n' +
            '• Chat entegrasyonu eklenebilir.',
        githubUrl: 'https://github.com/example/task-manager',
    },
    {
        title: 'Weather Dashboard',
        description:
            'Beautiful weather application with location-based forecasts and interactive charts.',
        tech: ['React', 'Chart.js', 'Weather API', 'Tailwind CSS'],
        previewUrl: 'https://www.example.com/path/to/weather-dashboard-video.mp4',
        devNotes:
            '• Hava durumu verisi: OpenWeatherMap API kullanıldı.\n' +
            '• Grafikler: Chart.js ile dinamik çizilen grafikler oluşturuldu.\n' +
            '• UI: TailwindCSS ile responsive ve mobile-first tasarım yapıldı.\n' +
            '• Harita entegrasyonu: Leaflet.js kullanılarak interaktif harita eklendi.\n' +
            '• Deployment: Netlify üzerinde otomatik deploy ayarlandı.',
        extraNotes:
            '• İleride PWA desteği eklenerek offline görüntüleme sağlanabilir.\n' +
            '• Kullanıcı konum izni isteyerek bulunduğu lokasyondaki hava durumu gösterilebilir.',
        githubUrl: 'https://github.com/example/weather-dashboard',
    },
    {
        title: 'Portfolio Website',
        description:
            'Minimalist portfolio site showcasing projects with smooth animations and dark mode.',
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        previewUrl: 'https://www.example.com/path/to/portfolio-screenshot.gif',
        devNotes:
            '• Tema geçişleri: TailwindCSS’in dark mode desteğiyle light/dark toggle özelliği eklendi.\n' +
            '• Animasyonlar: Framer Motion kullanılarak sayfa geçişleri ve eleman animasyonları yapıldı.\n' +
            '• Routing: React Router ile tek sayfa uygulaması yapılandırıldı.\n' +
            '• SEO: React Helmet kullanılarak dinamik meta tag’ler eklendi.\n' +
            '• Deployment: Vercel üzerinde otomatik CI/CD kuruldu.',
        extraNotes:
            '• İleride blog bölümü ekleyerek içerik üretimi yapılabilir.\n' +
            '• Çoklu dil desteği (i18n) entegre edilebilir.',
        githubUrl: 'https://github.com/example/portfolio',
    },
];
