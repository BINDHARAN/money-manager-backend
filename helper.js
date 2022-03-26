import { ObjectId } from 'mongodb'
import { client } from './index.js'

export async function createTransaction(data) {
  return await client.db('hackathon').collection('transaction').insertMany(data)
}

export async function getTransaction() {
  return await client
    .db('hackathon')
    .collection('transaction')
    .find({})
    .toArray()
}

export async function deleteTransactionById(id) {
  return await client
    .db('hackathon')
    .collection('transaction')
    .deleteOne({ _id: ObjectId(id) })
}

export async function createUser(data) {
  return await client.db('hackathon').collection('users').insertOne(data)
}

export async function getUserByName(username) {
  return await client.db('hackathon').collection('users').findOne({
    username: username,
  })
}