import { get, del, post, put } from '@/utils/request'

export function getList(page, per = 10) {
  return get('/api/v1/admin/products', {
    page,
    per
  })
}

export function removeOne(id) {
  return del('/api/v1/admin/products/' + id)
}

export const create = data => post('/api/v1/admin/products', data)

export const getOne = id => get('/api/v1/admin/products/' + id)

export const update = (id, data) => put('/api/v1/admin/products/' + id, data)
