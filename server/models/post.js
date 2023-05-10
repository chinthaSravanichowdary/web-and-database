const con = require("./db_connect");

// Create Table
async function createTable() {
	let sql = `CREATE TABLE if not exists posts(
        postID INT NOT NULL AUTO_INCREMENT,
        post VARCHAR(100) NOT NULL UNIQUE,
        userID INT,
        CONSTRAINT postPK PRIMARY KEY(postID)

    );`
	await con.query(sql);
}

createTable();

// Getting all posts
async function getAllPost() {
	const sql = `SELECT * FROM posts;`;
	let posts  = await con.query(sql);
	console.log(posts);
	return await posts;
}

// Creating a new post
async function createPost(post) {
	let cPost = await getPost(post);
	const sql = `INSERT INTO posts(post,userID) VALUES ("${post.post}",${post.userID});`
	await con.query(sql);
	return cPost[0];
}

async function editPost(post) {
	let sql = `UPDATE posts SET post="${post.post}" where postID=${post.postID}`;
	await con.query(sql);
	let updatedPost = await getPost(post);
	return updatedPost[0];
}

// Deleting post
async function deletePost(post) {
	let sql = `DELETE from users where postID=${post.postID}`;
	await con.query(sql);
}

async function getPost(post) {
	let sql;
	if (post.postID) {
		sql = `SELECT * from posts where postID=${post.postID}`;
	} else {
		sql = `SELECT * from posts where userID=${post.postID}`;
	}
	return await con.query(sql);
}

module.exports = {
	getAllPost,
	createPost,
	editPost,
	deletePost,
	getPost
};