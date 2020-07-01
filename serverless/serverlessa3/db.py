import sys
import logging
import pymysql
rds_host  = "database-1.cigxoyp3dem3.us-east-1.rds.amazonaws.com"
name = "admin"
password = "serverless"
db_name = "serverlessa3"

logger = logging.getLogger()
logger.setLevel(logging.INFO)

try:
    conn = pymysql.connect(rds_host, user=name, passwd=password, db=db_name, connect_timeout=5)
except pymysql.MySQLError as e:
    logger.error("ERROR: Unexpected error: Could not connect to MySQL instance.")
    logger.error(e)
    sys.exit()
    logger.info("SUCCESS: Connection to RDS MySQL instance succeeded")

    

    with conn.cursor() as cur:
        cur.execute('insert into Employee (EmpID, Name) values(1, "Joe")')