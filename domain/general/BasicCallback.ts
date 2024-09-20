interface BasicCallback<type> {

    onSuccess: (result: type) => void

    onError: (error: Error) => void
}