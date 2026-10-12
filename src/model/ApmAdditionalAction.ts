enum ApmAdditionalAction {
  RedirectToUrl = 'REDIRECT_TO_URL',
  OtpRequired = 'OTP_REQUIRED',
  ShowHtmlContent = 'SHOW_HTML_CONTENT',
  ShowQrCode = 'SHOW_QR_CODE',
  None = 'NONE',
  ApprovalRequired = 'APPROVAL_REQUIRED',
  VerifyRequired = 'VERIFY_REQUIRED',
  WaitForWebhook = 'WAIT_FOR_WEBHOOK'
}

export default ApmAdditionalAction;
