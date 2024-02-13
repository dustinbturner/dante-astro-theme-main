export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Dustin Turner',
    subtitle: 'Data Science & Machine Learning',
    description:
        'Dustin Turner is a data scientist and machine learning engineer based in Knoxville, TN. He is currently seeking opportunities in the financial services or healthcare space.',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dustin Turner | Data Scientist & Machine Learning Engineer'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Writing',
            href: '/blog'
        },
        {
            text: 'Categories',
            href: '/tags'
        },
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
        // {
        //     text: 'Terms',
        //     href: '/terms'
        // }
    ],
    socialLinks: [
        {
            text: 'Github',
            href: 'https://github.com/dustinbturner'
        },
        {
            text: 'Kaggle',
            href: 'https://www.kaggle.com/dustinbturner'
        },
        {
            text: 'Twitter',
            href: 'https://twitter.com/dustinbturner'
        }
    ],
    hero: {
        title: '',
        text: "I'm **Dustin**, a data scientist and machine learning engineer. <br><br> I've always been a keen observer, eager to learn from the world around me. This perspective fuels my excitement about the future of technological advancements.<br><br> During my service in the Army, I was regularly entrusted with challenging roles. This not only honed my leadership skills but also enabled me to teach, coach, and mentor both peers and subordinates effectively. <br><br>  While at Gartner, I had a front-row seat to the transformative power of technology. I collaborated closely with C-suite executives and tactical level teams, helping them navigate the seismic shifts brought on by COVID. Through strategic technology investments, I saw businesses pivot, adapt, and thrive in challenging times. <br><br> As I step into my next career phase, I'm focusing on data science, machine learning, and AI. I'm eager to see how these tools can change things for the better. I'm also interested in bringing elements of health, fitness, and psychology into my work.<br><br> My goal? To join a team that wants to make a positive impact and help the world.",
        // image: {
        //     src: '/About.png',
        //     alt: 'A person sitting at a desk in front of a computer'
        // },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    postsPerPage: 5,
    projectsPerPage: 5
};

export default siteConfig;
