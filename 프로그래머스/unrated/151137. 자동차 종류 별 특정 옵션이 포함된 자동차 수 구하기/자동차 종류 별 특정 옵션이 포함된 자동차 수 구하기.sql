SELECT CAR_TYPE, COUNT(*)
    FROM CAR_RENTAL_COMPANY_CAR
    WHERE OPTIONS LIKE '%__시트%'
    GROUP BY CAR_TYPE
    ORDER BY CAR_TYPE