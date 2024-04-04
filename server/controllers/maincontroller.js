//home page



exports.homepage =async(req,res)=>{
    const locals = {
        title:'Nodejs Notes',
        description:'Free NodeJS Notes App'
    }
    res.render('index',{
        locals,
        layout:'../views/layouts/front-page'

    })
}

/**
* GET /
* About
*/
exports.about = async (req, res) => {
    const locals ={
    title : "About - NodeJs Notes",
    description : "Free NodeJS Notes App.",
    }
    res.render('about', locals);
    }
/**
* GET /
* features
*/
exports.features = async (req, res) => {
    const locals ={
    title : "About - NodeJs Notes",
    description : "Free NodeJS Notes App.",
    }
    res.render('features', locals);
    }

    /**
* GET /
* faq
*/
exports.faq = async (req, res) => {
    const locals ={
    title : "About - NodeJs Notes",
    description : "Free NodeJS Notes App.",
    }
    res.render('faq', locals);
    }

    
    