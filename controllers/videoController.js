import {
    videos
} from "../db";

export const home = (req, res) => res.render("home", {
    pageTitle: "Home",
    videos
});

export const search = (req, res) => {
    // const searchingBy = req.query.term
    const {
        query: {
            term: searchingBy
        }
    } = req;
    res.render("search", {
        pageTitle: "Search",
        searchingBy
    });
}

export const upload = (req, res) => res.render("upload", {
    pageTitle: "Upload"
});
export const videoDetail = (req, res) => res.render("videoDetail", {
    pageTitle: "videoDetail"
});
export const editVideo = (req, res) => res.render("editVideo", {
    pageTitle: "editVideo"
});
export const deleteVideo = (req, res) => res.render("deleteVideo", {
    pageTitle: "deleteVideo"
});