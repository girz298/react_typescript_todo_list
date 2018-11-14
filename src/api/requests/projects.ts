export type IGetProjects = () => null | IProject[]

export const getProjects: IGetProjects = () => {
    return [
        {id:1, name: 'First'},
        {id:2, name: 'Second'},
        {id:3, name: 'Third'},
    ];
};