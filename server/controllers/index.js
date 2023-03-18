const {Customer,Item,ItemSale,Sale} = require('../models')

class Controller {
    static async createCustomer(req,res,next){
        try {
            const {nama, contact, email,alamat,diskon,tipe_diskon} = req.body
            let ktp;
            if(req.file){              
                ktp = req.file.filename
            }
            // if(tipe_diskon!= 'persentase' && tipe_diskon!= 'fix'){
            //     throw {name : '400', message : "tipe_diskon has to be persentase or fix"}
            // }
            const newCustomer = await Customer.create({nama, contact, email,alamat,diskon,tipe_diskon,ktp})
            

            res.status(201).json({
                nama, contact, email,alamat,diskon,tipe_diskon,ktp
            })
        } catch (error) {
            next(error)
        }
    }

    static async showAllCustomer(req,res,next){
        try {
            const customers = await Customer.findAll()

            res.status(200).json(customers)
        } catch (error) {
            next(error)
        }
    }

    static async findCustomer(req,res,next){
        try {
            const {id} = req.params
            
            const customer = await Customer.findByPk(id)
            res.status(200).json(customer)
        } catch (error) {
            next(error)
            
        }
    }

    static async createItem(req,res,next){
        try {
            const {nama_item,unit,stok,harga_satuan} = req.body
            let barang;
            if(req.file) barang = req.file.filename
            const newItem = await Item.create({nama_item,unit,stok,harga_satuan,barang})
            res.status(201).json({nama_item,unit,stok,harga_satuan,barang})
        } catch (error) {
            next(error)
            
        }
    }

    static async showAllItem(req,res,next){
        try {
            const items = await Item.findAll()
            res.status(200).json(items)
        } catch (error){
            next(error)
        }
    }

    static async createSale(req,res,next){
        try {
            const {code_transaksi,tanggal_transaksi,customerId,total_bayar} = req.body
            const newSale = await Sale.create({code_transaksi,tanggal_transaksi,customerId,total_bayar})
            res.status(201).json({code_transaksi,tanggal_transaksi,customerId,total_bayar} )
        } catch (error) {
            next(error)
        }
    }

    static async showAllSale(req,res,next){
        try {
            const sales = await Sale.findAll({include : [
                {
                  model: ItemSale,
                  include: [
                    {
                      model: Item
                    }
                  ]
                }
              ,Customer]})
            res.status(200).json(sales)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Controller