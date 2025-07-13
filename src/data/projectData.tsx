import hexasort_proto_video from '../assets/hexasort-proto.mp4';
export interface Project {
    title: string;
    category: string;
    description: string;
    tech: string[];
    previewUrl: string;
    devNotes: string;
    extraNotes?: string;
    githubUrl: string;
}

export const projectsData: Project[] = [
    {
        title: 'Maze Solver Visualizer',
        category: 'ai', // AI Development
        description:
            'A Unity project that visualizes various pathfinding algorithms solving a maze in real-time.',
        tech: ['Unity', 'C#', 'Threading', 'Pathfinding Algorithms'],
        previewUrl: 'https://www.youtube.com/embed/dVHP0KlOAsI?si=UE_S1lJ5kEhwAF6T',
        devNotes:
            'I developed a Maze Solver in Unity as part of my Systems Programming course. In this project, I aimed to run multiple pathfinding algorithms in parallel on separate threads to reach the solution as quickly as possible.\n',
        githubUrl: 'https://github.com/omerfcinoglu/unity-maze-solver',
    },
    {
        title: 'Hexasort Playable Ad',
        category: 'game', // Game Development
        description: 'A playable-ads adaptation of the Hexasort puzzle game, built in Cocos Creator as a single-file ad unit.',
        tech: ['Cocos Creator', 'TypeScript'],
        previewUrl: hexasort_proto_video,
        devNotes:
            'Developed for the playable-ads component of Hexasort as part of my game portfolio.\n ' +
            'I implemented all game logic, asset loading, and UI within one Cocos Creator scene file,' +
            'ensuring minimal footprint and fast startup in ad environments.\n',
        extraNotes:
            'Packaged as a single build file to simplify integration and porting across various web and mobile ad platforms.',
        githubUrl: 'https://github.com/yourusername/hexasort-playable-ad',
    },
    {
        title: 'Customizable Tic-Tac-Toe (NxN K-in-a-Row)',
        category: 'game', // Game Development
        description:
            'A vanilla JavaScript Canvas API implementation of Tic-Tac-Toe extended to an N×N grid (N ≥ 3). Players choose the number of consecutive marks (“K-in-a-Row”) required to win, making each game fully configurable.',
        tech: ['JavaScript', 'Canvas API'],
        previewUrl: '/path/to/tictactoe-demo.gif',
        devNotes:
            '• Built a dynamic N×N board renderer using Canvas.\n' +
            '• Implemented a “K-in-a-Row” win-condition detector that checks rows, columns, and both diagonals for any user-specified K ≥ 3.\n' +
            '• Handled user input and board state purely in vanilla JS for maximum portability.',
        githubUrl: 'https://github.com/yourusername/custom-tictactoe',
    },
    {
        title: 'Task Management App',
        category: 'web', // Web Development
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
        category: 'web', // Web Development
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
        category: 'web', // Web Development
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