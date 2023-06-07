SELECT TO_CHAR(O.SALES_DATE, 'YYYY') AS YEAR, TO_NUMBER(TO_CHAR(SALES_DATE, 'MM')) AS MONTH, 
    COUNT(DISTINCT O.USER_ID) AS PUCHASED_USERS,
    ROUND(COUNT(DISTINCT U.USER_ID) / (
        SELECT COUNT(DISTINCT USER_ID) FROM USER_INFO
        WHERE TO_CHAR(JOINED, 'YYYY') = '2021'
    ), 1) AS PUCHASED_RATIO
    FROM USER_INFO U RIGHT JOIN ONLINE_SALE O
    ON U.USER_ID = O.USER_ID
    WHERE TO_CHAR(JOINED, 'YYYY') = '2021'
    GROUP BY TO_CHAR(SALES_DATE, 'YYYY'), TO_CHAR(SALES_DATE, 'MM')
    ORDER BY YEAR, MONTH