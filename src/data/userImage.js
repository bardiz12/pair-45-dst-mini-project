const images = [
    require("../assets/profileImages/1.png"),
    require("../assets/profileImages/2.png"),
    require("../assets/profileImages/3.png"),
    require("../assets/profileImages/4.png")
]

const getImage = (id) => {
    return images[id - 1] || images[0]
}

const userImage = {
    getImage
}

export default userImage