-- 코드를 입력하세요
SELECT C.CAR_ID, C.CAR_TYPE, 
(C.DAILY_FEE * 30 * (100 - D.DISCOUNT_RATE) / 100) AS FEE
FROM (SELECT * FROM CAR_RENTAL_COMPANY_CAR 
WHERE CAR_TYPE IN ('SUV', '세단')) C, 
CAR_RENTAL_COMPANY_DISCOUNT_PLAN D
WHERE D.CAR_TYPE = C.CAR_TYPE
AND D.DURATION_TYPE = '30일 이상'
AND (C.DAILY_FEE * 30 * (100 - D.DISCOUNT_RATE) / 100) BETWEEN 500000 AND 2000000
AND CAR_ID NOT IN (SELECT CAR_ID
              FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
              WHERE END_DATE >= TO_DATE('2022-11-01', 'yyyy-mm-dd')
              AND START_DATE <= TO_DATE('2022-11-30', 'yyyy-mm-dd'))
ORDER BY FEE DESC, C.CAR_TYPE, C.CAR_ID DESC