import img1 from "@/assets/post1.jpg"
import img2 from "@/assets/post1.jpg"
import img3 from "@/assets/post1.jpg"
const posts = [
    {
        id: 1,
        image: img1,
        like: 0,
    },
    {
        id: 2,
        image: img2,
        like: 0,
    },
    {
        id: 3,
        image: img3,
        like: 0,
    },
    
]
export default {
    getPosts() {
        return posts;
    }
}