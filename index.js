const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

async function fun(){
    let con;
    const dbConfig = {
        user: 'ADAM',
        password: 'PENDER1507',
        connectString: '10.50.188.65/mprd.briqven.com.ve',
    };
    try {
        con = await oracledb.getConnection(dbConfig);
        const data = await con.execute(`select * from trabajadores where cedula='  16395343'`);
        console.log(data.rows);
    } catch (err) {
        console.error(err);
    }
}
fun();