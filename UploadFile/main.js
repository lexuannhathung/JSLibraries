function OnChange(event) {
    var file = event.currentTarget.files[0];
    var _onload = function (result) {
        document.getElementById('pic').src = result.base64;
    }
    GetBase64File(file, _onload);
}
function GetBase64File(file, loadFunc, errorFunc)
{
    try {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            if (loadFunc != undefined) {
                file.base64 = reader.result;
                loadFunc(file);
            }
        };
        reader.onerror = function (error) {
            if (errorFunc != undefined) {
                errorFunc(error);
            }
        };
    } catch (err){

    }
}