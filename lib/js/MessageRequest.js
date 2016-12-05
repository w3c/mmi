/** ======================================================================================================
==========================================================================================================
W3C SOFTWARE NOTICE AND LICENSE
http://www.w3.org/Consortium/Legal/2002/copyright-software-20021231

W3C Software Notice and License

This work (and included software, documentation such as READMEs, or other related items) is being provided by the copyright holders under the following license.

License

By obtaining, using and/or copying this work, you (the licensee) agree that you have read, understood, and will comply with the following terms and conditions.

Permission to copy, modify, and distribute this software and its documentation, with or without modification, for any purpose and without fee or royalty is hereby granted, provided that you include the following on ALL copies of the software and documentation or portions thereof, including modifications: 
* The full text of this NOTICE in a location viewable to users of the redistributed or derivative work.
* Any pre-existing intellectual property disclaimers, notices, or terms and conditions. If none exist, the W3C Software Short Notice should be included (hypertext is preferred, text is permitted) within the body of any redistributed or derivative code.
* Notice of any changes or modifications to the files, including the date changes were made. (We recommend you provide URIs to the location from which the code is derived.)

Disclaimers

THIS SOFTWARE AND DOCUMENTATION IS PROVIDED "AS IS," AND COPYRIGHT HOLDERS MAKE NO REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY OR FITNESS FOR ANY PARTICULAR PURPOSE OR THAT THE USE OF THE SOFTWARE OR DOCUMENTATION WILL NOT INFRINGE ANY THIRD PARTY PATENTS, COPYRIGHTS, TRADEMARKS OR OTHER RIGHTS.

COPYRIGHT HOLDERS WILL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF ANY USE OF THE SOFTWARE OR DOCUMENTATION. 
The name and trademarks of copyright holders may NOT be used in advertising or publicity pertaining to the software without specific, written prior permission. Title to copyright in this software and any associated documentation will at all times remain with copyright holders.
==========================================================================================================
========================================================================================================== */


/**
 * messageRequest class
 * 
 * @param spec
 *            The spec object contains all of the information that the
 *            constructor needs to make an instance
 * @returns a new requestBase object
 */
interaction.messageRequest = function(spec) { 
 	console.log("[MessageRequest]{interaction.messageRequest} created with status and method features ");
	var messageBase = this.messageBase(spec);  
 
	// private attributes
	// non-normalized attributes
	var method = spec.method;
	var status = spec.status;


	// getter and setter functions
	messageBase.setMethod = function(aMethod) {
		method = aMethod;
	};
	messageBase.getMethod = function() {
		return method;
	};
	
	messageBase.setStatus = function(aStatus) {
		state = aStatus;
	};
	messageBase.getStatus  = function() { 
		return status;
	};

	// Excepction handling
	if (typeof method == "undefined") {
		throw exception.METHOD_EMPTY;
	};
	return messageBase;  

}