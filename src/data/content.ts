// English is served at /; French at /fr/. Counts refer to published write-ups.
export type Lang = 'fr' | 'en';
export const profile = {
  name: 'Rayen Faleh', email: 'ryan.elfaleh@gmail.com',
  location: { fr: 'Nabeul, Tunisie', en: 'Nabeul, Tunisia' },
  linkedin: 'https://www.linkedin.com/in/rayen-el-faleh-665a3a1bb',
  github: 'https://github.com/rayenelfaleh',
  writeups: 'https://github.com/rayenelfaleh/cybersec-writeups',
  cv: { fr: 'CV_Rayen_Faleh.pdf', en: 'CV_Rayen_Faleh_EN.pdf' },
};
const reports = {
  ad: `${profile.writeups}/blob/main/TryHackMe/Medium/VulnNet_Active-2026-06-10.md`,
  web: `${profile.writeups}/blob/main/TryHackMe/Medium/Dogcat-2026-06-05.md`,
};
const fr = {
  meta: {
    title: 'Rayen Faleh — Stage PFE cybersécurité · Février 2027',
    description: 'Étudiant en master cybersécurité à Nabeul. 16 write-ups de labs publics, cas Active Directory et web, développement Java EE chez Tunisie Telecom. Stage PFE de 6 mois dès février 2027.',
  },
  nav: { about: 'Profil', skills: 'Compétences', projects: 'Cas concrets', experience: 'Parcours', contact: 'Contact' },
  switchLabel: 'EN', switchHref: '',
  hero: {
    status: 'Stage PFE recherché · 6 mois · dès février 2027',
    role: 'Étudiant en master cybersécurité · Nabeul, Tunisie',
    tagline: 'Je documente comment une attaque fonctionne et ce qu’une équipe de défense peut en apprendre. Mes preuves : 16 write-ups de labs publics et un stage de fin de licence en Java EE intégrant des contrôles de sécurité.',
    ctaContact: 'Voir 3 cas concrets', ctaCv: 'Télécharger le CV (FR)',
    briefTitle: 'En bref pour le recrutement',
    brief: [
      { label: 'Projet recherché', value: 'Tests d’intrusion et analyse défensive, avec encadrement.', href: '' },
      { label: 'Point de départ', value: '2 labs publiés + 1 projet de stage à découvrir ci-dessous.', href: '#projects' },
      { label: 'Langues', value: 'Arabe : maternelle · Français : courant · Anglais : courant à l’écrit, bonnes bases à l’oral.', href: '' },
      { label: 'Contact direct', value: profile.email, href: `mailto:${profile.email}` },
    ],
    stats: [
      { value: '16', label: 'write-ups de labs publics · 14 TryHackMe + 2 HackTheBox', href: profile.writeups },
      { value: 'AD & Web', label: 'des scénarios expliqués étape par étape', href: '#projects' },
      { value: 'Java EE', label: 'des contrôles concrets d’authentification et de session', href: '#secure-development' },
    ],
  },
  projects: {
    title: 'Trois cas pour évaluer mon travail',
    intro: 'Deux comptes rendus de laboratoires consultables et un projet de stage. Les exercices de sécurité sont réalisés en environnement d’entraînement.',
    catalog: 'Pour aller plus loin : 16 write-ups publiés, dont 14 sur TryHackMe et 2 sur HackTheBox.',
    catalogLink: 'Parcourir tous les comptes rendus',
    items: [
      {
        id: 'active-directory', title: 'Active Directory : retracer une compromission',
        summary: 'Comment un service exposé peut compromettre un serveur qui gère les comptes d’un domaine Windows.',
        year: 'VulnNet: Active', kind: 'Lab publié', featured: true,
        points: [
          'Démarche : énumération Redis/SMB, capture et cassage d’identifiants, détournement d’un script partagé, élévation de privilèges jusqu’à SYSTEM.',
          'Restitution : chaîne d’attaque documentée, avec pistes côté défense — restreindre Redis, surveiller les connexions SMB sortantes et protéger les scripts planifiés.',
        ],
        tags: ['Active Directory', 'Windows', 'Responder', 'Hashcat', 'Remédiation'],
        link: reports.ad, linkLabel: 'Lire le cas Active Directory',
      },
      {
        id: 'web-security', title: 'Sécurité web : d’un paramètre à une exécution de code',
        summary: 'Suivre une faille dans une page PHP jusqu’à ses conséquences sur le système.',
        year: 'Dogcat', kind: 'Lab publié', featured: false,
        points: [
          'Démarche : inclusion locale de fichiers (LFI), contournement de filtre et empoisonnement des journaux Apache.',
          'Résultat en laboratoire : exécution de code, élévation de privilèges Linux puis sortie d’un conteneur Docker, étapes et commandes documentées.',
        ],
        tags: ['PHP', 'LFI', 'Linux', 'Docker', 'Élévation de privilèges'],
        link: reports.web, linkLabel: 'Lire le cas de sécurité web',
      },
      {
        id: 'secure-development', title: 'Développement : protéger l’authentification',
        summary: 'Un PFE de licence chez Tunisie Telecom pour relier développement web et contrôles de sécurité.',
        year: 'Fév. – juil. 2025', kind: 'Stage · code non publié ici', featured: false,
        points: [
          'Application web de gestion de l’assurance maladie des employés : Java EE (JSP/Servlets), MySQL et JDBC/DAO, avec espaces Administrateur et Employé distincts.',
          'Contrôles intégrés : requêtes préparées dans l’authentification, validation des entrées côté serveur, hachage BCrypt, réinitialisation par e-mail et invalidation des sessions à la déconnexion.',
        ],
        tags: ['Java EE', 'MySQL', 'BCrypt', 'Validation serveur', 'Sessions'],
        link: profile.cv.fr, linkLabel: 'Consulter les détails dans le CV (FR)',
      },
    ],
  },
  about: {
    title: 'Ce que je peux apporter à un stage',
    body: [
      'Je suis étudiant en master cybersécurité à la Faculté Leaders Nabeul, après une licence en sciences de l’informatique à la Faculté des Sciences de Tunis.',
      'Avec l’encadrement de votre équipe, je souhaite contribuer à des tests d’intrusion, à l’analyse de scénarios d’attaque et à la rédaction de constats exploitables : étapes reproductibles, preuves et pistes de remédiation.',
      'Mes labs développent ma compréhension des attaques ; mon expérience Java EE m’aide à les relier aux contrôles applicatifs. La détection Wazuh/Sysmon et la mise en correspondance MITRE ATT&CK relèvent de ma pratique personnelle en laboratoire.',
    ],
    facts: [
      { k: 'Localisation', v: 'Nabeul, Tunisie' },
      { k: 'Formation actuelle', v: 'Master cybersécurité · en cours' },
      { k: 'Pratique sécurité', v: 'Labs personnels et CTF' },
      { k: 'Expérience en entreprise', v: 'Développement web et assistance technique' },
    ],
  },
  skills: {
    title: 'Compétences reliées à des exemples',
    groups: [
      {
        name: 'Tests d’intrusion en laboratoire', icon: 'target',
        context: 'Reconnaissance, exploitation et élévation de privilèges Linux/Windows dans des exercices documentés.',
        items: ['Nmap', 'Metasploit', 'Impacket', 'Evil-WinRM', 'Hashcat', 'Active Directory'],
        link: reports.ad, linkLabel: 'Voir un exemple Active Directory',
      },
      {
        name: 'Sécurité web', icon: 'globe',
        context: 'Comprendre une chaîne d’exploitation et rendre ses étapes vérifiables dans un compte rendu.',
        items: ['LFI', 'Injection SQL', 'Failles d’upload', 'Gobuster', 'PHP', 'Linux'],
        link: reports.web, linkLabel: 'Voir un exemple web',
      },
      {
        name: 'Développement et contrôles de sécurité', icon: 'terminal',
        context: 'Contrôles d’authentification mis en œuvre pendant mon PFE de licence.',
        items: ['Java EE', 'MySQL', 'JDBC/DAO', 'BCrypt', 'Validation serveur', 'Sessions'],
        link: '#secure-development', linkLabel: 'Voir le projet de stage',
      },
      {
        name: 'Détection et environnement de lab', icon: 'shield',
        context: 'Pratique personnelle : SIEM Wazuh, Sysmon et correspondance avec MITRE ATT&CK ; infrastructure ESXi, Kali Linux et Sophos/VPN SSL.',
        items: ['Wazuh', 'Sysmon', 'MITRE ATT&CK', 'ESXi', 'Kali Linux', 'Sophos'],
        link: '#active-directory', linkLabel: 'Voir les pistes défensives du cas AD',
      },
    ],
  },
  experience: {
    title: 'Parcours', workTitle: 'Expérience professionnelle', eduTitle: 'Formation',
    work: [
      { role: 'Monteur vidéo & assistant technique', org: 'Almourabi E-learning', period: 'Avr. – sept. 2026', points: ['10 à 18 vidéos pédagogiques montées par jour, jusqu’à 22 ; préparation du matériel et résolution des incidents pendant les cours.'] },
      { role: 'Stagiaire développeur web — PFE de licence', org: 'Tunisie Telecom · Nabeul', period: 'Fév. – juil. 2025', points: ['Application de gestion de l’assurance maladie des employés en Java EE/MySQL.', 'Authentification, validation serveur, mots de passe et sessions : contrôles présentés dans le cas de développement ci-dessus.'] },
    ],
    education: [
      { degree: 'Master en informatique — Spécialisation cybersécurité', school: 'Faculté Leaders Nabeul', period: '2025 – 2027', note: 'En cours' },
      { degree: 'Licence en sciences de l’informatique', school: 'Faculté des Sciences de Tunis', period: '2021 – 2025' },
    ],
    languagesTitle: 'Langues',
    languages: [
      { name: 'Arabe', level: 'Langue maternelle' },
      { name: 'Français', level: 'Courant' },
      { name: 'Anglais', level: 'Courant à l’écrit, bonnes bases à l’oral' },
    ],
  },
  contact: {
    title: 'Parlons de votre stage PFE',
    body: 'Vous avez un sujet en tests d’intrusion, sécurité applicative ou analyse défensive ? Envoyez-moi le périmètre et les attentes de votre équipe pour échanger sur une contribution adaptée à mon niveau.',
    email: 'Proposer un échange',
  },
  footer: 'Conçu avec Astro.',
};
type Content = typeof fr;
const en: Content = {
  meta: {
    title: 'Rayen Faleh — Cybersecurity internship · February 2027',
    description: 'Cybersecurity master’s student in Nabeul, Tunisia. 16 public lab write-ups, Active Directory and web cases, Java EE development at Tunisie Telecom. Seeking a 6-month final-year internship from February 2027.',
  },
  nav: { about: 'Profile', skills: 'Skills', projects: 'Selected work', experience: 'Background', contact: 'Contact' },
  switchLabel: 'FR', switchHref: 'fr/',
  hero: {
    status: 'Seeking a 6-month final-year internship · from February 2027',
    role: 'Cybersecurity master’s student · Nabeul, Tunisia',
    tagline: 'I document how attacks work and what defenders can learn. My evidence: 16 public lab write-ups and a Java EE internship implementing application security controls.',
    ctaContact: 'See 3 selected cases', ctaCv: 'Download CV (EN)',
    briefTitle: 'Recruiter brief',
    brief: [
      { label: 'Opportunity sought', value: 'Supervised penetration testing and defensive analysis.', href: '' },
      { label: 'Start here', value: '2 published labs + 1 internship project below.', href: '#projects' },
      { label: 'Languages', value: 'Arabic: native · French: fluent · English: fluent in writing, good basic speaking skills.', href: '' },
      { label: 'Direct contact', value: profile.email, href: `mailto:${profile.email}` },
    ],
    stats: [
      { value: '16', label: 'public lab write-ups · 14 TryHackMe + 2 HackTheBox', href: profile.writeups },
      { value: 'AD & Web', label: 'attack paths explained step by step', href: '#projects' },
      { value: 'Java EE', label: 'concrete authentication and session controls', href: '#secure-development' },
    ],
  },
  projects: {
    title: 'Three cases to judge my work',
    intro: 'Two lab reports you can read and one internship project. Security exercises are carried out in training environments.',
    catalog: 'Explore the full collection: 16 published write-ups, including 14 TryHackMe and 2 HackTheBox reports.',
    catalogLink: 'Browse all the write-ups',
    items: [
      {
        id: 'active-directory', title: 'Active Directory: tracing a compromise',
        summary: 'How an exposed service can compromise a server that manages a Windows domain’s accounts.',
        year: 'VulnNet: Active', kind: 'Published lab', featured: true,
        points: [
          'Work: Redis/SMB enumeration, credential capture and cracking, shared-script hijacking, then privilege escalation to SYSTEM.',
          'Report: a documented attack chain with defensive ideas — restrict Redis access, monitor outbound SMB connections and protect scheduled scripts.',
        ],
        tags: ['Active Directory', 'Windows', 'Responder', 'Hashcat', 'Remediation'],
        link: reports.ad, linkLabel: 'Read the Active Directory case',
      },
      {
        id: 'web-security', title: 'Web security: from a parameter to code execution',
        summary: 'Following a flaw in a PHP page through to its consequences for the host system.',
        year: 'Dogcat', kind: 'Published lab', featured: false,
        points: [
          'Work: local file inclusion (LFI), filter bypass and Apache log poisoning.',
          'Lab result: code execution, Linux privilege escalation and a Docker container escape, with steps and commands documented.',
        ],
        tags: ['PHP', 'LFI', 'Linux', 'Docker', 'Privilege escalation'],
        link: reports.web, linkLabel: 'Read the web security case',
      },
      {
        id: 'secure-development', title: 'Development: protecting authentication',
        summary: 'A bachelor’s final-year internship at Tunisie Telecom connecting web development with application security controls.',
        year: 'Feb – Jul 2025', kind: 'Internship · no public code linked', featured: false,
        points: [
          'Employee health insurance management web app: Java EE (JSP/Servlets), MySQL and JDBC/DAO, with separate Administrator and Employee areas.',
          'Controls implemented: prepared statements in authentication, server-side input validation, BCrypt hashing, email password resets and session invalidation on logout.',
        ],
        tags: ['Java EE', 'MySQL', 'BCrypt', 'Input validation', 'Sessions'],
        link: profile.cv.en, linkLabel: 'Read the internship details in my CV (EN)',
      },
    ],
  },
  about: {
    title: 'What I could contribute during an internship',
    body: [
      'I’m studying for a cybersecurity master’s at Faculté Leaders Nabeul, after a Computer Science bachelor’s degree at Faculté des Sciences de Tunis.',
      'With your team’s supervision, I want to contribute to penetration testing, attack-scenario analysis and clear findings: reproducible steps, evidence and remediation ideas.',
      'My labs build an understanding of attack paths; my Java EE experience connects that work to application controls. Wazuh/Sysmon detection and MITRE ATT&CK mapping are part of my personal lab practice.',
    ],
    facts: [
      { k: 'Location', v: 'Nabeul, Tunisia' },
      { k: 'Current studies', v: 'Cybersecurity master’s · in progress' },
      { k: 'Security practice', v: 'Personal labs and CTFs' },
      { k: 'Work experience', v: 'Web development and technical support' },
    ],
  },
  skills: {
    title: 'Skills connected to examples',
    groups: [
      {
        name: 'Lab-based penetration testing', icon: 'target',
        context: 'Reconnaissance, exploitation and Linux/Windows privilege escalation in documented exercises.',
        items: ['Nmap', 'Metasploit', 'Impacket', 'Evil-WinRM', 'Hashcat', 'Active Directory'],
        link: reports.ad, linkLabel: 'See an Active Directory example',
      },
      {
        name: 'Web security', icon: 'globe',
        context: 'Understanding an exploitation chain and making its steps verifiable in a write-up.',
        items: ['LFI', 'SQL injection', 'File upload flaws', 'Gobuster', 'PHP', 'Linux'],
        link: reports.web, linkLabel: 'See a web example',
      },
      {
        name: 'Development and security controls', icon: 'terminal',
        context: 'Authentication controls implemented during my bachelor’s final-year internship.',
        items: ['Java EE', 'MySQL', 'JDBC/DAO', 'BCrypt', 'Input validation', 'Sessions'],
        link: '#secure-development', linkLabel: 'See the internship project',
      },
      {
        name: 'Detection and lab environment', icon: 'shield',
        context: 'Personal practice: Wazuh SIEM, Sysmon and MITRE ATT&CK mapping; an ESXi, Kali Linux and Sophos/SSL VPN environment.',
        items: ['Wazuh', 'Sysmon', 'MITRE ATT&CK', 'ESXi', 'Kali Linux', 'Sophos'],
        link: '#active-directory', linkLabel: 'See defensive ideas in the AD case',
      },
    ],
  },
  experience: {
    title: 'Background', workTitle: 'Work experience', eduTitle: 'Education',
    work: [
      { role: 'Video editor & technical assistant', org: 'Almourabi E-learning', period: 'Apr – Sep 2026', points: ['Edited 10–18 educational videos daily, up to 22; set up instructors’ equipment and resolved technical issues during classes.'] },
      { role: 'Web development intern — bachelor’s final-year project', org: 'Tunisie Telecom · Nabeul', period: 'Feb – Jul 2025', points: ['Employee health insurance management app built with Java EE/MySQL.', 'Authentication, input validation, passwords and sessions: controls described in the development case above.'] },
    ],
    education: [
      { degree: 'Master’s in Computer Science — Cybersecurity specialisation', school: 'Faculté Leaders Nabeul', period: '2025 – 2027', note: 'In progress' },
      { degree: 'Bachelor’s degree in Computer Science', school: 'Faculté des Sciences de Tunis', period: '2021 – 2025' },
    ],
    languagesTitle: 'Languages',
    languages: [
      { name: 'Arabic', level: 'Native' },
      { name: 'French', level: 'Fluent' },
      { name: 'English', level: 'Fluent in writing, good basic speaking skills' },
    ],
  },
  contact: {
    title: 'Let’s discuss your internship project',
    body: 'Have a project in penetration testing, application security or defensive analysis? Send me the scope and your team’s expectations so we can discuss a contribution suited to my current level.',
    email: 'Start a conversation',
  },
  footer: 'Built with Astro.',
};
export const content: Record<Lang, Content> = { fr, en };
