const http = require('http')

const server = http.createServer(function(request, response) {
  console.dir(request.param)

  if (request.method == 'POST') {
    console.log('POST')
    var body = ''
    request.on('data', function(data) {
      body += data
      console.log('Partial body: ' + body)
    })
    request.on('end', function() {
      console.log('Body: ' + body)
      response.writeHead(200, {'Content-Type': 'text/html'})
      response.end('post received')
    })
  } else {
    console.log('GET')
    var html = `
            <html>
                <body>
                    <form method="post" action="http://localhost:3000">Profile:<br>
                        <p>
                            <label>Your name?</label><br>
                            <input type="text" name="name" />
                        </p>
                        <p>
                            <label>How old are you?</label><br>
                            <input type="text" name="age" />
                        </p>
                        <p>
                            <label>What is your favorite food?</label><br>
                            <input type="text" name="food" />
                        </p>
                        <p>
                            <input type="submit" value="Submit" />
                        </p>
                    </form>
                </body>
            </html>`
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end(html)
  }
})

const port = 3000
const Host = '127.0.0.1'
server.listen(port, Host)
console.log(`Listening at http://${Host}:${port}`)