const list_aov = (prefix) => {
return `*ZEEONE OFC さ*
			
PROSES	1-60Mnt Max 1X24 Jam		
OPEN	08.00-21.00		
FORMAT	ID		
			
VOUCHER AOV
		
40VC	  Rp 10,000.00		
90VC	  Rp 19,800.00				
230VC   Rp 49,000.00		
470VC   Rp 98,500.00		
950VC	Rp 195,000.00		
1.430VC  Rp 293,000.00			

Untuk pay / pembayan silahkan ketik ${prefix}pay
`
	}

exports.list_aov = list_aov
 
