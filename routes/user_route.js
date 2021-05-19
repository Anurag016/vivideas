const multer = require("multer");
const upload = multer({dest:"uploads/"})
const user_model = require("../model/user_model");
const product_model = require("../model/product_model");
const unique_codes = require("../model/unique_codes");
exports.register = function(req,res){
    user_model.find({
        email:req.body.data.email
    },function(err,data){
        if(data.length!=0){
            res.status(201).json({
                success:"email already registered"
            })
        }
        else{
            var register_user = new user_model({
                email:req.body.data.email,
                password:req.body.data.password,
                fullname:req.body.data.fullname,
                role:req.body.data.role
            });
            register_user.save(function(err,user){
                res.status(201).json({
                    success:true,
                    data:user
                });
            })
        }
    })
}

exports.login = function(req,res){
    console.log(req.body.data.email);
    user_model.findOne({email:req.body.data.email},function(err,user){
        if(user!=null){
            if(user.password==req.body.data.password){
                
                res.status(201).json({
                    success:true,
                    data:user
                })
            }
            else{
                res.status(201).json({
                    success:false
                })
            }
        }
        else{
            res.status(201).json({
                success:false,
            })
        }
    })
}

exports.saveproduct = function(req,res){
    // console.log("body in save product",req.body);
    upload.single(req.body.file);
    product_model.findOne({productid:req.body.data.pid},function(err,data1){
        if(data1!=null){
            res.status(400).json({status:"product already exist"})
        }
        else{
            var product = new product_model(
                {
                    productid:req.body.data.pid,
                    productname:req.body.data.pname,
                    productimage:req.body.data.pimage
                }
            );
            product.save(function(err,data){
                if(err){res.status(400).json({success:"error"})}
                else{res.status(200).json({success:"true"})}
            })
        }
    })
}

exports.generate_codes = function(req,res){
    //req: productid, productbatch, no of codes
    var date = Date.now().toString();
    product_model.findOne({productid:req.body.pid},function(err,data){
        if(data==null){
            res.status(400).json({status:"pid not found"})
        }
        else{
            //generate codes
            var generated_codes = [];
            for(let i=0;i<req.body.codes;i++){
                var code = req.body.pid+req.body.pbatch +date+i ;
                generated_codes.push({
                    productid:req.body.pid,
                    batchno:req.body.pbatch,
                    expdate:req.body.expdate,
                    mfgdate:req.body.mfgdate,
                    code:code
                });
            }
            unique_codes.insertMany(generated_codes,function(err,data){
                if(err){console.log("error in insert");
                res.status(400).json({success:false})
            }
                else{
                    res.status(200).json(generated_codes);

                }
            })
        }
    })
    
}


exports.get_products = function(req,res){
    product_model.find({},{productid:1},function(err,data){
        if(err){res.status(400).json({status:"error"})}
        else{res.status(200).json({status:data})}
    })
}

exports.get_batchno = function(req,res){
    unique_codes.find({productid:req.body.data},function(err,data){
        if(err){res.status(400).json({status:"error"})}
        else{res.status(200).json(data)}
    })
}