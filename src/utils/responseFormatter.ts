interface ApiResponse<T> {
  success: boolean
  data: T
  message: string
}

export const formatResponse = <T>(data: T, message: string = '操作成功'): ApiResponse<T> => ({ success: true, data, message })

export const formatErrorResponse = (message: string = '操作失败'): ApiResponse<null> => ({ success: false, data: null, message })
