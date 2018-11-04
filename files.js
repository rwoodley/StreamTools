var _boneFiles = [
"P1040951.JPG",
"P1040952.JPG",
"P1040953.JPG",
"P1040954.JPG",
"P1040955.JPG",
"P1040956.JPG",
"P1040957.JPG",
"P1040958.JPG",
"P1040959.JPG",
"P1040960.JPG",
"P1040961.JPG",
"P1040962.JPG",
"P1040963.JPG",
"P1040964.JPG",
"P1040965.JPG",
"P1040966.JPG",
"P1040967.JPG",
"P1040968.JPG",
"P1040969.JPG",
"P1040970.JPG"
];
function randomBoneList() {
    var array = _boneFiles;
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
var _textureIndex = 0;
var _randomList;
var _materials;
var _textureLoader = new THREE.TextureLoader();
var _textures;
function shuffleBoneList() {
    randomBoneList();
    _randomList = _boneFiles;
    _textureIndex = 0;
    _materials = [];
    _textures = [];
}
function textureLoader(callme) {
    recurse(callme);
}
function recurse(callme) {
    console.log("Loading " + _textureIndex + ", " + _randomList[_textureIndex]);
    _textureLoader.load("textures/" + _randomList[_textureIndex],
        function ( texture ) {
            _textures[_textureIndex] = texture;
            //  console.log("Loaded.")
            _materials[_textureIndex] = new THREE.MeshBasicMaterial( {
                map: texture
             });
             if (_textureIndex < 4) {
                _textureIndex++;
                recurse(callme);
             }
            else
                callme();
        },
        undefined,
        function ( err ) {console.error( 'An error happened.' ); }
    );    
}
