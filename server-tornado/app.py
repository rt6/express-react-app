# python -m tornado.autoreload app.py
import tornado.ioloop
import tornado.web
import logging

logging.basicConfig(level=logging.DEBUG,
        format='%(asctime)s.%(msecs)03d %(levelname)s %(module)s - %(funcName)s: %(message)s', datefmt="%Y-%m-%d %H:%M:%S")

class BaseHandler(tornado.web.RequestHandler):

    def set_default_headers(self):
        # Allow CORS
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with")
        self.set_header('Access-Control-Allow-Methods', ' PUT, DELETE, OPTIONS')

    def options(self):
        # no body
        self.set_status(204)
        self.finish()

class MainHandler(BaseHandler):
    def get(self):
        self.write({"message":"Hello, world from tornado"})

def make_app():
    return tornado.web.Application([
        (r"/", MainHandler),
    ], autoreload=True
)

if __name__ == "__main__":
    port = 8888
    logging.debug("start server on port {}".format(port))
    app = make_app()
    app.listen(8888)
    tornado.ioloop.IOLoop.current().start()
