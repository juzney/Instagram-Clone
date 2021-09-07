const Post = require('../models/Post')
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');



module.exports = {

async Store(req, res){
	const {author, place, description, hashtags} = req.body;
	const {filename: image} = req.file;

/*
// redimensionando a imagem
	await sharp(req.file.path)
	.resize(500)
	.jpeg({ quality: 70} )
	.toFile(
		path.resolve(req.file.destination, 'resized', image)
		)

	fs.unlinkSync(req.file.path);

*/

	const post = await Post.create({

		author,
		place,
		description,
		hashtags,
		image,
	});

	req.io.emit('post', post);

	
	return res.json(post);
	
},

async Index(req, res){

	const posts = await Post.find().sort('-createdAt')

	return res.json(posts);
}


}

