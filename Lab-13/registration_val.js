function check_error(){
    const firstname = document.getElementById('first_name').value;
    const middlename = document.getElementById('middle_name').value;
    const lastname = document.getElementById('last_name').value;
    const studentid = document.getElementById('sid').value;
    const email = document.getElementById('emailid').value;
    const address = document.getElementById('address').value;
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;
    const areacode = document.getElementById('areacode').value;
    const phoneno = document.getElementById('phonenumber').value;


    let flag=true;
    document.getElementById('err_firstname').style.display = 'none';
    document.getElementById('err_middlename').style.display = 'none';
    document.getElementById('err_lastname').style.display = 'none';
    document.getElementById('err_studentid').style.display = 'none';
    document.getElementById('err_email').style.display = 'none';
    document.getElementById('err_address').style.display = 'none';
    document.getElementById('err_state').style.display = 'none';
    document.getElementById('err_country').style.display = 'none';
    document.getElementById('err_areacode').style.display = 'none';
    document.getElementById('err_phonenumber').style.display = 'none';
    
    if(firstname == '')
    {
        document.getElementById('err_firstname').style.display = 'inline-block';
        flag=false;
    }
    if(middlename == '')
    {
        document.getElementById('err_middlename').style.display = 'inline-block';
        flag=false;
    }
    if(lastname == '')
    {
        document.getElementById('err_lastname').style.display = 'inline-block';
        flag=false;
    }
    if(studentid == '')
    {
        document.getElementById('err_studentid').style.display = 'inline-block';
        flag=false;
    }
    if(email == '')
    {
        document.getElementById('err_email').style.display = 'inline-block';
        flag=false;
    }
    if(address == '')
    {
        document.getElementById('err_address').style.display = 'inline-block';
        flag=false;
    }
    if(state == '')
    {
        document.getElementById('err_state').style.display = 'inline-block';
        flag=false;
    }
    if(country == '')
    {
        document.getElementById('err_country').style.display = 'inline-block';
        flag=false;
    }
    if(areacode == '')
    {
        document.getElementById('err_areacode').style.display = 'inline-block';
        flag=false;
    }
    if(phoneno == '')
    {
        document.getElementById('err_phonenumber').style.display = 'inline-block';
        flag=false;
    }
    return flag;
}