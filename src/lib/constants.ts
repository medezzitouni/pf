
export const basePath = process.env.NEXT_PUBLIC_NODE_ENV === 'development' ? '' : '/pf';

export const withBasPath = (path: string) => `${basePath}${path}`


export const profileImage = withBasPath('/assets/profile.jpg');
export const logo = withBasPath('/logo.png');
export const resume_pdf = '/assets/Resume_Ezzitouni_Med.pdf';
