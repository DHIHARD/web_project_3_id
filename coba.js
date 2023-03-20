<script>

// Function to generate OTP
function generateOTP() {
		
	// Declare a string variable
	// which stores all string
	var string = '0123456789abcdefghijklmnopqrs
	tuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let OTP = '';
	
	// Find the length of string
	var len = string.length;
	for (let i = 0; i < 6; i++ ) {
		OTP += string[Math.floor(Math.random() * len)];
	}
	return OTP;
}

document.write("OTP of 6 length: ")
document.write( generateOTP() );
</script>					
