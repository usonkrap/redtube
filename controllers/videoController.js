export const home = (req, res) => res.render("home", {
    pageTitle: "Home"
});
export const search = (req, res) => res.send("search");
export const videos = (req, res) => res.send("videos");
export const upload = (req, res) => res.send("upload");
export const videoDetail = (req, res) => res.send("video detal");
export const editVideo = (req, res) => res.send("edit video");
export const deleteVideo = (req, res) => res.send("delete video");