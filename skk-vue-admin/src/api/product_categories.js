import { get, del, post, put } from '@/utils/request'

export function getList(page, per = 10) {
  return get('/api/v1/admin/product_categories', {
    page,
    per
  })
}

export function removeOne(id) {
  return del('/api/v1/admin/product_categories/' + id)
}

export const create = data => post('/api/v1/admin/product_categories', data)

export const getOne = id => get('/api/v1/admin/product_categories/' + id)

export const update = (id, data) => put('/api/v1/admin/product_categories/' + id, data)
