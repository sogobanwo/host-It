import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../../ui/dialog';
import QRCode from 'react-qr-code';

const POAPform = () => {
  const [email, setEmail] = useState("");
  const [qrValue, setQRValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setQRValue(email);
  };

  return (
    <Card className="w-full max-w-md bg-[#121212]/50">
      <Dialog>
        <CardHeader>
          <CardTitle className="text-white">Get POAP QR Code</CardTitle>
          <CardDescription className="text-white">Enter your email address to generate POAP QR code.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input
                className="w-full font-mono bg-[#121212]/50 text-white"
                id="email"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <DialogTrigger
              className="w-full bg-black text-white py-3 rounded-xl"
              type="submit"
            >
              Get QR Code
            </DialogTrigger>
            <DialogContent className="flex justify-center items-center">
              <DialogHeader>
                <DialogTitle>Scan QR</DialogTitle>
                <DialogDescription>
                  <QRCode
                    size={300}
                    bgColor="white"
                    fgColor="black"
                    value={qrValue}
                  />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </form>
        </CardContent>
      </Dialog>
    </Card>
  );
};

export default POAPform;