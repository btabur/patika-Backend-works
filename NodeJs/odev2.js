const blogs = [
    {id:1, title:"Başlık 1" , desc:" açıklama 1"},
    {id:2, title:"Başlık 2" , desc:" açıklama 2"},
    {id:3, title:"Başlık 3" , desc:" açıklama 3"},
    {id:4, title:"Başlık 4" , desc:" açıklama 4"},
]

const showBlogs = ()=> {
        blogs.map(blog=> console.log(blog.title) )
}

const addBlog = (newBlog,callback) => {
    console.log("---------------")
    blogs.push(newBlog)
    callback()
}

showBlogs();

addBlog({id:blogs.length+1, title: `Başlık ${blogs.length+1}`, desc:`Açıklama ${blogs.length+1}`},showBlogs)