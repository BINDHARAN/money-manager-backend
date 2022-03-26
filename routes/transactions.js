import express from 'express'
import {
  createTransaction,
  deleteTransactionById,
  getTransaction,
} from '../helper.js'

const router = express.Router()

//CREATE TRANSACTION
router.post('/', async (req, res) => {
  const data = req.body

  const result = await createTransaction(data)
  res.send(result)
})

//READ TRANSACTION
router.get('/', async (req, res) => {
  const data = req.body

  const result = await getTransaction(data)
  res.send(result)
})

//DELETE TRANSACTION
router.delete('/:id', async (req, res) => {
  // console.log(req.params)
  const { id } = req.params

  const transactions = await deleteTransactionById(id)
  res.send(transactions)
})

//UPDATE TRANSACTION

export const transactionRoute = router

