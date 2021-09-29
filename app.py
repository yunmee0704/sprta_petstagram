from flask import Flask, render_template, jsonify, request

app = Flask(__name__)
from pymongo import MongoClient
#
client = MongoClient('mongodb://test:test@13.124.12.77', 27017)
# client = MongoClient('mongodb://test:test@3.38.117.254:27017')
db = client.dbsparta




## HTML을 주는 부분
@app.route('/')
def home():


    return render_template('index.html')


## API 역할을 하는 부분

@app.route('/api/pettype', methods=['GET']) #pet type를 db에서 가져와서 index.html로 보내줌
def pet_type():
    print('pet_type get 실행')
    pet_types = list(db.petstagram_pet_type.find({}, {'_id': False}))
    print('pet_type get 종료')
    return jsonify({'result': 'success', 'pet_types': pet_types})

@app.route('/api/petlist', methods=['GET']) #pet list를 db에서 가져와서 index.html로 보내줌
def pet_list():
    print('pet_list get 실행')
    pet_lists = list(db.petstagram.find({}, {'_id': False}))
    print('pet_list get 종료')
    return jsonify({'result': 'success', 'pet_lists': pet_lists})



if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
