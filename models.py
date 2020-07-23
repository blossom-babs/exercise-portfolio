from pymodm import connect, MongoModel, fields

connect ("mongodb://localhost:27017/Blossom-webpage")

class Messages(MongoModel):
    name = fields.CharField(required=True, blank=False)
    email = fields.CharField(required=True, blank=False)
    message = fields.CharField(required=True, blank=False)