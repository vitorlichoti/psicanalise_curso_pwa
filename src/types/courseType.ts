export type courseType = {
    id: number,
    course_name: string,
    image_url: string,
    modules: [{
        id: string,
        module_name: string,
        classes: [{}]
    }]
}