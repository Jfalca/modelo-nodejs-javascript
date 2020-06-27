class Hello {
  index(request, response) {
    const teste = request.query.id;

    return response.status(200).json({ messsage: `OK ${teste}` });
  }
}

export default new Hello();
