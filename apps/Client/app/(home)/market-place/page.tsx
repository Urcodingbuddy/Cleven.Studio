"use client"

import { useState } from "react"
import {
  BookOpen,
  Clock,
  Gift,
  LineChart,
  Package,
  ShoppingBag,
  ShoppingCart,
  Star,
  Zap,
  Trash,
} from "lucide-react"
import { Badge } from "@/components/components/ui/badge"
import { Button } from "@/components/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/components/ui/card"
import { Progress } from "@/components/components/ui/progress"
import { Separator } from "@/components/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/components/ui/tabs"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/components/ui/accordion"

export default function Marketplace() {
  const [cartItems, setCartItems] = useState([{ id: 1, name: "Website Speed Optimization", price: 199 }])

  interface CartItem {
    id: number
    name: string
    price: number
  }

  const addToCart = (item: CartItem): void => {
    setCartItems([...cartItems, item])
  }

  return (
    <div className="flex min-h-screen w-screen bg-[#0c0c0c]">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className=" flex h-14 items-center gap-4 border-b px-4 sm:px-6">
          <div className="flex-1 flex items-center gap-2">
            <h1 className="text-xl font-semibold">Marketplace</h1>
            {/* <Badge variant="outline" className="ml-2">
              Premium Access
            </Badge> */}
          </div>
         
        </header>
        <main className="grid gap-6 p-4 sm:p-6 md:gap-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:flex-1">
              <Tabs defaultValue="recommended" className="w-full">
                <div className="flex items-center justify-between cursor-pointer ">
                  <TabsList>
                    <TabsTrigger value="recommended">Recommended</TabsTrigger>
                    <TabsTrigger value="services">Services</TabsTrigger>
                    <TabsTrigger value="addons">Add-ons</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="recommended" className="mt-4">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-semibold">Recommended For You</h2>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      <Card className="overflow-hidden transition-all hover:shadow-md">
                        <CardHeader className="p-4 pb-2">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-2">
                              <div className="rounded-full bg-indigo-100 p-2">
                                <Zap className="h-5 w-5 text-indigo-600" />
                              </div>
                              <div>
                                <CardTitle className="text-base">Website Speed Optimization</CardTitle>
                              </div>
                            </div>
                            <Badge className="bg-orange-500 hover:bg-orange-600">Best Seller</Badge>
                          </div>
                          <CardDescription className="mt-2 text-black">
                            Boost your website speed and Core Web Vitals.
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="included">
                              <AccordionTrigger className="text-sm py-1">What's included</AccordionTrigger>
                              <AccordionContent>
                                <ul className="text-sm space-y-1">
                                  <li className="flex items-center gap-2">
                                    <span className="text-green-500">✓</span> Audit + Optimization
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <span className="text-green-500">✓</span> CDN configuration
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <span className="text-green-500">✓</span> Image optimization
                                  </li>
                                </ul>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </CardContent>
                        <CardFooter className="flex items-center justify-between p-4 pt-0">
                          <div className="font-medium">$199</div>
                          <Button
                            size="sm"
                            onClick={() => addToCart({ id: 2, name: "Website Speed Optimization", price: 199 })}
                          >
                            Add to Cart
                          </Button>
                        </CardFooter>
                      </Card>

                      <Card className="overflow-hidden transition-all hover:shadow-md">
                        <CardHeader className="p-4 pb-2">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-2">
                              <div className="rounded-full bg-blue-100 p-2">
                                <LineChart className="h-5 w-5 text-blue-600" />
                              </div>
                              <div>
                                <CardTitle className="text-base">SEO Booster</CardTitle>
                              </div>
                            </div>
                            <Badge className="bg-green-500 hover:bg-green-600">New</Badge>
                          </div>
                          <CardDescription className="mt-2">
                            Improve your search rankings and visibility.
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="included">
                              <AccordionTrigger className="text-sm py-1">What's included</AccordionTrigger>
                              <AccordionContent>
                                <ul className="text-sm space-y-1">
                                  <li className="flex items-center gap-2">
                                    <span className="text-green-500">✓</span> Keyword optimization
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <span className="text-green-500">✓</span> Meta tags update
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <span className="text-green-500">✓</span> Content suggestions
                                  </li>
                                </ul>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </CardContent>
                        <CardFooter className="flex items-center justify-between p-4 pt-0">
                          <div className="font-medium">$249</div>
                          <Button size="sm" onClick={() => addToCart({ id: 3, name: "SEO Booster", price: 249 })}>
                            Add to Cart
                          </Button>
                        </CardFooter>
                      </Card>

                      <Card className="overflow-hidden transition-all hover:shadow-md">
                        <CardHeader className="p-4 pb-2">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-2">
                              <div className="rounded-full bg-purple-100 p-2">
                                <BookOpen className="h-5 w-5 text-purple-600" />
                              </div>
                              <div>
                                <CardTitle className="text-base">Content Updates</CardTitle>
                              </div>
                            </div>
                            <Badge className="bg-blue-500 hover:bg-blue-600">Popular</Badge>
                          </div>
                          <CardDescription className="mt-2">
                            Keep your website content fresh and engaging.
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="included">
                              <AccordionTrigger className="text-sm py-1">What's included</AccordionTrigger>
                              <AccordionContent>
                                <ul className="text-sm space-y-1">
                                  <li className="flex items-center gap-2">
                                    <span className="text-green-500">✓</span> Monthly content refresh
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <span className="text-green-500">✓</span> Image updates
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <span className="text-green-500">✓</span> SEO optimization
                                  </li>
                                </ul>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </CardContent>
                        <CardFooter className="flex items-center justify-between p-4 pt-0">
                          <div className="font-medium">$179</div>
                          <Button size="sm" onClick={() => addToCart({ id: 4, name: "Content Updates", price: 179 })}>
                            Add to Cart
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-semibold flex items-center">
                        <Package className="mr-2 h-5 w-5 text-blue-500" />
                        Bundles (SAVE BIG)
                      </h2>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      <Card className="overflow-hidden border-2 border-white/10 transition-all hover:shadow-md">
                        <CardHeader className="p-4 pb-2 ">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-base">🚀 Startup Booster</CardTitle>
                            <Badge className="bg-indigo-500 hover:bg-indigo-600">Save 20%</Badge>
                          </div>
                          <CardDescription className="mt-2">
                            Everything you need to boost your startup's online presence.
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-4">
                          <ul className="text-sm space-y-2">
                            <li className="flex items-center gap-2">
                              <span className="text-indigo-500">✓</span> Maintenance Plan
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-indigo-500">✓</span> Bug Fix Service
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-indigo-500">✓</span> Speed Optimization
                            </li>
                          </ul>
                          <div className="mt-3 flex items-center text-sm">
                            <span className="text-muted-foreground line-through mr-2">$599</span>
                            <span className="font-medium text-base">$479</span>
                          </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                          <Button
                            className="w-full"
                            onClick={() => addToCart({ id: 5, name: "Startup Booster Bundle", price: 479 })}
                          >
                            Buy Bundle
                          </Button>
                        </CardFooter>
                      </Card>

                      <Card className="overflow-hidden border-2 border-white/10 transition-all hover:shadow-md">
                        <CardHeader className="p-4 pb-2 ">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-base">🌱 Growth Kit</CardTitle>
                            <Badge className="bg-green-500 hover:bg-green-600">Save 25%</Badge>
                          </div>
                          <CardDescription className="mt-2">
                            Perfect for businesses looking to expand their reach.
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-4">
                          <ul className="text-sm space-y-2">
                            <li className="flex items-center gap-2">
                              <span className="text-green-500">✓</span> SEO Booster
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-green-500">✓</span> Content Updates
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-green-500">✓</span> Social Media Integration
                            </li>
                          </ul>
                          <div className="mt-3 flex items-center text-sm">
                            <span className="text-muted-foreground line-through mr-2">$649</span>
                            <span className="font-medium text-base">$487</span>
                          </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                          <Button
                            className="w-full"
                            onClick={() => addToCart({ id: 6, name: "Growth Kit Bundle", price: 487 })}
                          >
                            Buy Bundle
                          </Button>
                        </CardFooter>
                      </Card>

                      <Card className="overflow-hidden border-2 border-white/10 transition-all hover:shadow-md">
                        <CardHeader className="p-4 pb-2">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-base">🔥 Ultimate Pro</CardTitle>
                            <Badge className="bg-orange-500 hover:bg-orange-600">Save 35%</Badge>
                          </div>
                          <CardDescription className="mt-2">
                            All-inclusive package with premium support.
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-4">
                          <ul className="text-sm space-y-2">
                            <li className="flex items-center gap-2">
                              <span className="text-orange-500">✓</span> All 6 Core Plans
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-orange-500">✓</span> Free Analytics Dashboard
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-orange-500">✓</span> Priority Support
                            </li>
                          </ul>
                          <div className="mt-3 flex items-center text-sm">
                            <span className="text-muted-foreground line-through mr-2">$1299</span>
                            <span className="font-medium text-base">$844</span>
                          </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                          <Button
                            className="w-full"
                            onClick={() => addToCart({ id: 7, name: "Ultimate Pro Bundle", price: 844 })}
                          >
                            Grab Now
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-semibold flex items-center">
                        <Clock className="mr-2 h-5 w-5 text-red-500" />
                        Limited-Time Offers
                      </h2>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      <Card className="overflow-hidden border-2 border-red-100 transition-all hover:shadow-md">
                        <CardHeader className="p-4 pb-2">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-base">⏳ Flash Deal: SEO Booster</CardTitle>
                            <Badge className="bg-red-500 hover:bg-red-600">40% OFF</Badge>
                          </div>
                          <CardDescription className="mt-2">Limited time offer - 24 hours only!</CardDescription>
                        </CardHeader>
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between text-sm mb-2">
                            <span>Ends in:</span>
                            <span className="font-medium text-red-600">11:24:36</span>
                          </div>
                          <Progress value={35} className="h-2 bg-red-100">
                            <div className="h-2 bg-red-500" style={{ width: '35%' }}></div>
                          </Progress>
                          <div className="mt-3 flex items-center text-sm">
                            <span className="text-muted-foreground line-through mr-2">$249</span>
                            <span className="font-medium text-base">$149</span>
                          </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                          <Button
                            className="w-full bg-red-500 hover:bg-red-600"
                            onClick={() => addToCart({ id: 8, name: "Flash Deal: SEO Booster", price: 149 })}
                          >
                            Grab Now
                          </Button>
                        </CardFooter>
                      </Card>

                      <Card className="overflow-hidden border-2 border-green-100 transition-all hover:shadow-md">
                        <CardHeader className="p-4 pb-2">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-base">🎉 New Arrival: Social Media Add-On</CardTitle>
                            <Badge className="bg-green-500 hover:bg-green-600">New</Badge>
                          </div>
                          <CardDescription className="mt-2">Introductory price for early adopters!</CardDescription>
                        </CardHeader>
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between text-sm mb-2">
                            <span>Limited spots:</span>
                            <span className="font-medium text-green-600">23/50 claimed</span>
                          </div>
                          <Progress value={46} className="h-2 bg-green-100">
                            <div className="h-2 bg-green-500" style={{ width: '46%' }}></div>
                          </Progress>
                          <div className="mt-3 flex items-center text-sm">
                            <span className="text-muted-foreground line-through mr-2">$149</span>
                            <span className="font-medium text-base">$99</span>
                          </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                          <Button
                            className="w-full bg-green-500 hover:bg-green-600"
                            onClick={() => addToCart({ id: 9, name: "Social Media Add-On", price: 99 })}
                          >
                            Claim Offer
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="services" className="mt-4">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Service cards would go here - similar to the ones in Recommended tab */}
                    <Card className="overflow-hidden transition-all hover:shadow-md">
                      <CardHeader className="p-4 pb-2">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-2">
                            <div className="rounded-full bg-indigo-100 p-2">
                              <Zap className="h-5 w-5 text-indigo-600" />
                            </div>
                            <div>
                              <CardTitle className="text-base">Website Speed Optimization</CardTitle>
                            </div>
                          </div>
                          <Badge className="bg-orange-500 hover:bg-orange-600">Best Seller</Badge>
                        </div>
                        <CardDescription className="mt-2">
                          Boost your website speed and Core Web Vitals.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="included">
                            <AccordionTrigger className="text-sm py-1">What's included</AccordionTrigger>
                            <AccordionContent>
                              <ul className="text-sm space-y-1">
                                <li className="flex items-center gap-2">
                                  <span className="text-green-500">✓</span> Audit + Optimization
                                </li>
                                <li className="flex items-center gap-2">
                                  <span className="text-green-500">✓</span> CDN configuration
                                </li>
                                <li className="flex items-center gap-2">
                                  <span className="text-green-500">✓</span> Image optimization
                                </li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                      <CardFooter className="flex items-center justify-between p-4 pt-0">
                        <div className="font-medium">$199</div>
                        <Button
                          size="sm"
                          onClick={() => addToCart({ id: 2, name: "Website Speed Optimization", price: 199 })}
                        >
                          Add to Cart
                        </Button>
                      </CardFooter>
                    </Card>

                    {/* More service cards would go here */}
                  </div>
                </TabsContent>

                <TabsContent value="bundles" className="mt-4">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Bundle cards would go here - similar to the ones in Recommended tab */}
                  </div>
                </TabsContent>

                <TabsContent value="addons" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Add-Ons</CardTitle>
                      <CardDescription>Enhance your services with these powerful add-ons</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="rounded-md border">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b">
                              <th className="p-3 text-left font-medium">Add-On</th>
                              <th className="p-3 text-left font-medium">Description</th>
                              <th className="p-3 text-left font-medium">Price</th>
                              <th className="p-3 text-left font-medium"></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="p-3 font-medium">Weekly Backup</td>
                              <td className="p-3 text-sm text-muted-foreground">Auto backup your website weekly</td>
                              <td className="p-3">$99/mo</td>
                              <td className="p-3">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => addToCart({ id: 10, name: "Weekly Backup", price: 99 })}
                                >
                                  Add
                                </Button>
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-3 font-medium">Analytics Dashboard</td>
                              <td className="p-3 text-sm text-muted-foreground">Visualize speed, SEO, uptime</td>
                              <td className="p-3">$149</td>
                              <td className="p-3">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => addToCart({ id: 11, name: "Analytics Dashboard", price: 149 })}
                                >
                                  Add
                                </Button>
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-3 font-medium">Extra Support 5H</td>
                              <td className="p-3 text-sm text-muted-foreground">Get 5 more hours/month</td>
                              <td className="p-3">$249</td>
                              <td className="p-3">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => addToCart({ id: 12, name: "Extra Support 5H", price: 249 })}
                                >
                                  Add
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <td className="p-3 font-medium">Discord Bot Integration</td>
                              <td className="p-3 text-sm text-muted-foreground">Discord support bot for your site</td>
                              <td className="p-3">$199</td>
                              <td className="p-3">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => addToCart({ id: 13, name: "Discord Bot Integration", price: 199 })}
                                >
                                  Add
                                </Button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Right Sidebar - Cart */}
            <div className="md:w-80 lg:w-96">
              <Card className="sticky top-20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Your Cart
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-6 text-center">
                      <ShoppingBag className="h-10 w-10 text-muted-foreground mb-3" />
                      <p className="text-sm text-muted-foreground">Your cart is empty</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-between border-b pb-3">
                          <div className="flex-1">
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-muted-foreground">${item.price}</p>
                          </div>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Trash className="h-4 w-4" />
                            <span className="sr-only">Remove</span>
                          </Button>
                        </div>
                      ))}

                      <div className="pt-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Subtotal</span>
                          <span>${cartItems.reduce((total, item) => total + item.price, 0)}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm mt-2">
                          <span>Discount</span>
                          <span className="text-green-600">-$0</span>
                        </div>
                        <Separator className="my-3" />
                        <div className="flex items-center justify-between font-medium">
                          <span>Total</span>
                          <span>${cartItems.reduce((total, item) => total + item.price, 0)}</span>
                        </div>
                      </div>

                      <Button className="w-full mt-4">Checkout</Button>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex flex-col items-start pt-0">
                  <h3 className="text-sm font-medium mb-2">Suggested for you</h3>
                  <div className="w-full space-y-2">
                    <Card className="overflow-hidden">
                      <div className="flex p-3">
                        <div className="rounded-full bg-amber-100 p-2 mr-3">
                          <Star className="h-4 w-4 text-amber-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium">Analytics Dashboard</h4>
                          <p className="text-xs text-muted-foreground">Perfect with your current plan</p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-sm font-medium">$149</span>
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-7 text-xs"
                              onClick={() => addToCart({ id: 11, name: "Analytics Dashboard", price: 149 })}
                            >
                              Add
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>

                    <Card className="overflow-hidden">
                      <div className="flex p-3">
                        <div className="rounded-full bg-purple-100 p-2 mr-3">
                          <Gift className="h-4 w-4 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium">Weekly Backup</h4>
                          <p className="text-xs text-muted-foreground">32 users bought this last week</p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-sm font-medium">$99/mo</span>
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-7 text-xs"
                              onClick={() => addToCart({ id: 10, name: "Weekly Backup", price: 99 })}
                            >
                              Add
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>

          {/* Insights Section */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <LineChart className="mr-2 h-5 w-5 text-cyan-500" />
              Your Growth & Usage Insights
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Bugs Fixed</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">+3 from last month</p>
                  <div className="mt-2">
                    <Progress value={75} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Site Speed</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline">
                    <div className="text-2xl font-bold">92</div>
                    <div className="text-sm text-muted-foreground ml-1">/ 100</div>
                  </div>
                  <p className="text-xs text-green-600">+15 from before optimization</p>
                  <div className="mt-2">
                    <Progress value={92} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Backups Done</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground">Last backup: 2 days ago</p>
                  <div className="mt-2">
                    <Progress value={100} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Uptime</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline">
                    <div className="text-2xl font-bold">99.9</div>
                    <div className="text-sm text-muted-foreground ml-1">%</div>
                  </div>
                  <p className="text-xs text-muted-foreground">Last 30 days</p>
                  <div className="mt-2">
                    <Progress value={99.9} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mt-4 flex justify-center">
              <Button
                variant="outline"
                className="text-sm"
                onClick={() => addToCart({ id: 11, name: "Analytics Dashboard", price: 149 })}
              >
                Want detailed analytics? → Buy Analytics Add-On
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
