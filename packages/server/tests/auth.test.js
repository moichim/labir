import { expect, test } from 'vitest'

test('/some_folder?action=login', async () => {

    const request = await fetch( 
        "http://localhost:8080/some_folder?action=login", {
            method: "POST",
            body: JSON.stringify({
                user: "root",
                password: "abcdefghijk"
            })
        }
    );

    const json = await request.json();

    console.log( json );

    expect( request.status ).toBe( 200 );

    expect( json.success ).toBe( true );

    expect( json.data ).not.toBeUndefined();

    expect( json.data.login.user ).not.toBeUndefined();
    expect( json.data.login.user ).toBe( "root" );

    expect( json.data.login.token ).not.toBeUndefined();

    const token = json.data.login.token;

    const url = `http://localhost:8080/some_folder?token=${token}&user=root`;

    const request2 = await fetch( url );
    expect( request2.status ).toBe( 200 );

    const json2 = await request2.json();
    console.log( json2 );
    expect( json2.data ).not.toBeUndefined();

})


