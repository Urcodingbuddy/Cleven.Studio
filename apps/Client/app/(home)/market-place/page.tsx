"use client"

import { useState } from "react"
import {
  BookOpen,
  Box,
  ChevronDown,
  Flame,
  Gift,
  LineChart,
  Package,
  Rocket,
  ShoppingCart,
  Star,
  Trash,
  Zap,
} from "lucide-react"
import { Badge } from "@/components/components/ui/badge"
import { Button } from "@/components/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/components/ui/card"
import { Separator } from "@/components/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/components/ui/tabs"

export default function Marketplace() {
  const [cartItems, setCartItems] = useState([{ id: 1, name: "Website Speed Optimization", price: 199 }])
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({})

  interface CartItem {
    id: number
    name: string
    price: number
  }

  const addToCart = (item: CartItem): void => {
    setCartItems([...cartItems, item])
  }

  interface RemoveFromCart {
    (id: number): void;
  }

  const removeFromCart: RemoveFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Replace the header section with this updated version that includes a mobile cart icon */}
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between gap-4 border-b border-zinc-800 bg-black px-4 sm:px-6">
          <h1 className="text-2xl font-bold">Marketplace</h1>
          <div className="md:hidden">
            <Button variant="outline" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                  {cartItems.length}
                </span>
              )}
            </Button>
          </div>
        </header>

        <main className="grid gap-6 p-4 sm:p-6 md:gap-8">
          <Tabs defaultValue="recommended" className="w-full">
            <TabsList className="bg-zinc-900">
              <TabsTrigger value="recommended">Recommended</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="addons">Add-ons</TabsTrigger>
            </TabsList>

            <TabsContent value="recommended" className="mt-6">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Recommended For You</h2>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {/* Website Speed Optimization Card */}
                  <Card className="overflow-hidden border-zinc-800 bg-zinc-900 transition-all hover:border-zinc-700 hover:shadow-lg">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2">
                          <div className="rounded-full bg-blue-900 p-2">
                            <Zap className="h-5 w-5 text-blue-400" />
                          </div>
                          <div>
                            <CardTitle className="text-base">Website Speed Optimization</CardTitle>
                          </div>
                        </div>
                        <Badge className="bg-orange-500 hover:bg-orange-600">Best Seller</Badge>
                      </div>
                      <CardDescription className="mt-2 text-zinc-400">
                        Boost your website speed and Core Web Vitals.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="mt-4 grid grid-cols-3 gap-2">
                        <div className="rounded-md border border-zinc-800 p-2 text-center">
                          <div className="text-xs text-zinc-400">Basic</div>
                          <div className="font-medium">$99</div>
                          <Button
                            size="sm"
                            variant="outline"
                            className="mt-2 w-full text-xs"
                            onClick={() => addToCart({ id: 2, name: "Website Speed Optimization (Basic)", price: 99 })}
                          >
                            Add
                          </Button>
                        </div>
                        <div className="rounded-md border border-blue-900 bg-zinc-800 p-2 text-center">
                          <div className="text-xs text-blue-400">Standard</div>
                          <div className="font-medium">$199</div>
                          <Button
                            size="sm"
                            className="mt-2 w-full text-xs bg-blue-600 hover:bg-blue-700"
                            onClick={() =>
                              addToCart({ id: 3, name: "Website Speed Optimization (Standard)", price: 199 })
                            }
                          >
                            Add
                          </Button>
                        </div>
                        <div className="rounded-md border border-zinc-800 p-2 text-center">
                          <div className="text-xs text-zinc-400">Premium</div>
                          <div className="font-medium">$299</div>
                          <Button
                            size="sm"
                            variant="outline"
                            className="mt-2 w-full text-xs"
                            onClick={() =>
                              addToCart({ id: 4, name: "Website Speed Optimization (Premium)", price: 299 })
                            }
                          >
                            Add
                          </Button>
                        </div>
                      </div>
                      <div>
                        <button
                          className="flex w-full items-center justify-center gap-1 mt-3 text-sm text-zinc-400"
                          onClick={() => setExpandedCards({ ...expandedCards, speed: !expandedCards["speed"] })}
                        >
                          What's included{" "}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${expandedCards["speed"] ? "rotate-180" : ""}`}
                          />
                        </button>

                        {expandedCards["speed"] && (
                          <div className="mt-3 pt-3 border-t border-zinc-800">
                            <ul className="text-sm space-y-2 text-zinc-400">
                              <li className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span>
                                <span>Basic: Site audit, image optimization</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-blue-500 mr-2">✓</span>
                                <span>Standard: Everything in Basic + caching setup, code optimization</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-purple-500 mr-2">✓</span>
                                <span>Premium: Everything in Standard + CDN setup, monthly monitoring</span>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  {/* SEO Booster Card */}
                  <Card className="overflow-hidden border-zinc-800 bg-zinc-900 transition-all hover:border-zinc-700 hover:shadow-lg">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2">
                          <div className="rounded-full bg-green-900 p-2">
                            <LineChart className="h-5 w-5 text-green-400" />
                          </div>
                          <div>
                            <CardTitle className="text-base">SEO Booster</CardTitle>
                          </div>
                        </div>
                        <Badge className="bg-green-500 hover:bg-green-600">New</Badge>
                      </div>
                      <CardDescription className="mt-2 text-zinc-400">
                        Improve your search rankings and visibility.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="mt-4 grid grid-cols-3 gap-2">
                        <div className="rounded-md border border-zinc-800 p-2 text-center">
                          <div className="text-xs text-zinc-400">Basic</div>
                          <div className="font-medium">$149</div>
                          <Button
                            size="sm"
                            variant="outline"
                            className="mt-2 w-full text-xs"
                            onClick={() => addToCart({ id: 5, name: "SEO Booster (Basic)", price: 149 })}
                          >
                            Add
                          </Button>
                        </div>
                        <div className="rounded-md border border-green-900 bg-zinc-800 p-2 text-center">
                          <div className="text-xs text-green-400">Standard</div>
                          <div className="font-medium">$249</div>
                          <Button
                            size="sm"
                            className="mt-2 w-full text-xs bg-green-600 hover:bg-green-700"
                            onClick={() => addToCart({ id: 6, name: "SEO Booster (Standard)", price: 249 })}
                          >
                            Add
                          </Button>
                        </div>
                        <div className="rounded-md border border-zinc-800 p-2 text-center">
                          <div className="text-xs text-zinc-400">Premium</div>
                          <div className="font-medium">$349</div>
                          <Button
                            size="sm"
                            variant="outline"
                            className="mt-2 w-full text-xs"
                            onClick={() => addToCart({ id: 7, name: "SEO Booster (Premium)", price: 349 })}
                          >
                            Add
                          </Button>
                        </div>
                      </div>
                      <div>
                        <button
                          className="flex w-full items-center justify-center gap-1 mt-3 text-sm text-zinc-400"
                          onClick={() => setExpandedCards({ ...expandedCards, seo: !expandedCards["seo"] })}
                        >
                          What's included{" "}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${expandedCards["seo"] ? "rotate-180" : ""}`}
                          />
                        </button>

                        {expandedCards["seo"] && (
                          <div className="mt-3 pt-3 border-t border-zinc-800">
                            <ul className="text-sm space-y-2 text-zinc-400">
                              <li className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span>
                                <span>Basic: Keyword research, meta tags optimization</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-blue-500 mr-2">✓</span>
                                <span>Standard: Everything in Basic + content optimization, backlink analysis</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-purple-500 mr-2">✓</span>
                                <span>Premium: Everything in Standard + monthly reports, competitor analysis</span>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Content Updates Card */}
                  <Card className="overflow-hidden border-zinc-800 bg-zinc-900 transition-all hover:border-zinc-700 hover:shadow-lg">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2">
                          <div className="rounded-full bg-purple-900 p-2">
                            <BookOpen className="h-5 w-5 text-purple-400" />
                          </div>
                          <div>
                            <CardTitle className="text-base">Content Updates</CardTitle>
                          </div>
                        </div>
                        <Badge className="bg-blue-500 hover:bg-blue-600">Popular</Badge>
                      </div>
                      <CardDescription className="mt-2 text-zinc-400">
                        Keep your website content fresh and engaging.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="mt-4 grid grid-cols-3 gap-2">
                        <div className="rounded-md border border-zinc-800 p-2 text-center">
                          <div className="text-xs text-zinc-400">Basic</div>
                          <div className="font-medium">$79</div>
                          <Button
                            size="sm"
                            variant="outline"
                            className="mt-2 w-full text-xs"
                            onClick={() => addToCart({ id: 8, name: "Content Updates (Basic)", price: 79 })}
                          >
                            Add
                          </Button>
                        </div>
                        <div className="rounded-md border border-purple-900 bg-zinc-800 p-2 text-center">
                          <div className="text-xs text-purple-400">Standard</div>
                          <div className="font-medium">$179</div>
                          <Button
                            size="sm"
                            className="mt-2 w-full text-xs bg-purple-600 hover:bg-purple-700"
                            onClick={() => addToCart({ id: 9, name: "Content Updates (Standard)", price: 179 })}
                          >
                            Add
                          </Button>
                        </div>
                        <div className="rounded-md border border-zinc-800 p-2 text-center">
                          <div className="text-xs text-zinc-400">Premium</div>
                          <div className="font-medium">$279</div>
                          <Button
                            size="sm"
                            variant="outline"
                            className="mt-2 w-full text-xs"
                            onClick={() => addToCart({ id: 10, name: "Content Updates (Premium)", price: 279 })}
                          >
                            Add
                          </Button>
                        </div>
                      </div>
                      <div>
                        <button
                          className="flex w-full items-center justify-center gap-1 mt-3 text-sm text-zinc-400"
                          onClick={() => setExpandedCards({ ...expandedCards, content: !expandedCards["content"] })}
                        >
                          What's included{" "}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${expandedCards["content"] ? "rotate-180" : ""}`}
                          />
                        </button>

                        {expandedCards["content"] && (
                          <div className="mt-3 pt-3 border-t border-zinc-800">
                            <ul className="text-sm space-y-2 text-zinc-400">
                              <li className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span>
                                <span>Basic: 3 content updates per month</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-blue-500 mr-2">✓</span>
                                <span>Standard: 10 content updates per month + image optimization</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-purple-500 mr-2">✓</span>
                                <span>Premium: Unlimited updates + content strategy consultation</span>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Add this new section after the "Recommended For You" section and before the "Bundles" section */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Plan Comparison</h2>
                </div>
                <Card className="border-zinc-800 bg-zinc-900">
                  <CardHeader>
                    <CardTitle>What's Included in Each Plan</CardTitle>
                    <CardDescription className="text-zinc-400">
                      Compare features across our Basic, Standard, and Premium plans
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-zinc-800">
                            <th className="text-left p-3">Feature</th>
                            <th className="text-center p-3">
                              <div className="font-medium">Basic</div>
                              <div className="text-sm text-zinc-400">Starting at $99</div>
                            </th>
                            <th className="text-center p-3 bg-zinc-800/50">
                              <div className="font-medium text-blue-400">Standard</div>
                              <div className="text-sm text-zinc-400">Starting at $199</div>
                            </th>
                            <th className="text-center p-3">
                              <div className="font-medium">Premium</div>
                              <div className="text-sm text-zinc-400">Starting at $299</div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-zinc-800">
                            <td className="p-3">Initial Setup</td>
                            <td className="text-center p-3">✓</td>
                            <td className="text-center p-3 bg-zinc-800/50">✓</td>
                            <td className="text-center p-3">✓</td>
                          </tr>
                          <tr className="border-b border-zinc-800">
                            <td className="p-3">Response Time</td>
                            <td className="text-center p-3">72 hours</td>
                            <td className="text-center p-3 bg-zinc-800/50">24 hours</td>
                            <td className="text-center p-3">4 hours</td>
                          </tr>
                          <tr className="border-b border-zinc-800">
                            <td className="p-3">Revisions</td>
                            <td className="text-center p-3">1</td>
                            <td className="text-center p-3 bg-zinc-800/50">3</td>
                            <td className="text-center p-3">Unlimited</td>
                          </tr>
                          <tr className="border-b border-zinc-800">
                            <td className="p-3">Support Duration</td>
                            <td className="text-center p-3">7 days</td>
                            <td className="text-center p-3 bg-zinc-800/50">30 days</td>
                            <td className="text-center p-3">90 days</td>
                          </tr>
                          <tr className="border-b border-zinc-800">
                            <td className="p-3">Advanced Analytics</td>
                            <td className="text-center p-3">-</td>
                            <td className="text-center p-3 bg-zinc-800/50">✓</td>
                            <td className="text-center p-3">✓</td>
                          </tr>
                          <tr>
                            <td className="p-3">Priority Support</td>
                            <td className="text-center p-3">-</td>
                            <td className="text-center p-3 bg-zinc-800/50">-</td>
                            <td className="text-center p-3">✓</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold flex items-center">
                    <Package className="mr-2 h-5 w-5 text-blue-400" />
                    Bundles (SAVE BIG)
                  </h2>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {/* Startup Booster Bundle */}
                  <Card className="overflow-hidden border-zinc-800 bg-zinc-900 transition-all hover:border-zinc-700 hover:shadow-lg">
                    <CardHeader className="p-4 pb-2 bg-gradient-to-r from-blue-900/20 to-indigo-900/20">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2">
                          <div className="rounded-full bg-blue-900 p-2">
                            <Rocket className="h-5 w-5 text-blue-400" />
                          </div>
                          <CardTitle className="text-base">Startup Booster</CardTitle>
                        </div>
                        <Badge className="bg-blue-500 hover:bg-blue-600">Save 20%</Badge>
                      </div>
                      <CardDescription className="mt-2 text-zinc-400">
                        Everything you need to boost your startup's online presence.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4">
                      <ul className="text-sm space-y-2 text-zinc-400">
                        <li className="flex items-center gap-2">
                          <span className="text-blue-400">✓</span> Maintenance Plan
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-blue-400">✓</span> Bug Fix Service
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-blue-400">✓</span> Speed Optimization
                        </li>
                      </ul>
                      <div className="mt-3 flex items-center text-sm">
                        <span className="text-zinc-500 line-through mr-2">$599</span>
                        <span className="font-medium text-base">$479</span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button
                        className="w-full"
                        onClick={() => addToCart({ id: 11, name: "Startup Booster Bundle", price: 479 })}
                      >
                        Buy Bundle
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Growth Kit Bundle */}
                  <Card className="overflow-hidden border-zinc-800 bg-zinc-900 transition-all hover:border-zinc-700 hover:shadow-lg">
                    <CardHeader className="p-4 pb-2 bg-gradient-to-r from-green-900/20 to-teal-900/20">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2">
                          <div className="rounded-full bg-green-900 p-2">
                            <Box className="h-5 w-5 text-green-400" />
                          </div>
                          <CardTitle className="text-base">Growth Kit</CardTitle>
                        </div>
                        <Badge className="bg-green-500 hover:bg-green-600">Save 25%</Badge>
                      </div>
                      <CardDescription className="mt-2 text-zinc-400">
                        Perfect for businesses looking to expand their reach.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4">
                      <ul className="text-sm space-y-2 text-zinc-400">
                        <li className="flex items-center gap-2">
                          <span className="text-green-400">✓</span> SEO Booster
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-400">✓</span> Content Updates
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-400">✓</span> Social Media Integration
                        </li>
                      </ul>
                      <div className="mt-3 flex items-center text-sm">
                        <span className="text-zinc-500 line-through mr-2">$649</span>
                        <span className="font-medium text-base">$487</span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button
                        className="w-full"
                        onClick={() => addToCart({ id: 12, name: "Growth Kit Bundle", price: 487 })}
                      >
                        Buy Bundle
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Ultimate Pro Bundle */}
                  <Card className="overflow-hidden border-zinc-800 bg-zinc-900 transition-all hover:border-zinc-700 hover:shadow-lg">
                    <CardHeader className="p-4 pb-2 bg-gradient-to-r from-orange-900/20 to-red-900/20">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2">
                          <div className="rounded-full bg-orange-900 p-2">
                            <Flame className="h-5 w-5 text-orange-400" />
                          </div>
                          <CardTitle className="text-base">Ultimate Pro</CardTitle>
                        </div>
                        <Badge className="bg-orange-500 hover:bg-orange-600">Save 35%</Badge>
                      </div>
                      <CardDescription className="mt-2 text-zinc-400">
                        All-inclusive package with premium support.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4">
                      <ul className="text-sm space-y-2 text-zinc-400">
                        <li className="flex items-center gap-2">
                          <span className="text-orange-400">✓</span> All 6 Core Plans
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-orange-400">✓</span> Free Analytics Dashboard
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-orange-400">✓</span> Priority Support
                        </li>
                      </ul>
                      <div className="mt-3 flex items-center text-sm">
                        <span className="text-zinc-500 line-through mr-2">$1299</span>
                        <span className="font-medium text-base">$844</span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button
                        className="w-full"
                        onClick={() => addToCart({ id: 13, name: "Ultimate Pro Bundle", price: 844 })}
                      >
                        Grab Now
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="services" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Service cards would go here - similar to the ones in Recommended tab */}
                <Card className="overflow-hidden border-zinc-800 bg-zinc-900 transition-all hover:border-zinc-700 hover:shadow-lg">
                  <CardHeader className="p-4 pb-2">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-blue-900 p-2">
                          <Zap className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <CardTitle className="text-base">Website Speed Optimization</CardTitle>
                        </div>
                      </div>
                      <Badge className="bg-orange-500 hover:bg-orange-600">Best Seller</Badge>
                    </div>
                    <CardDescription className="mt-2 text-zinc-400">
                      Boost your website speed and Core Web Vitals.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="rounded-md border border-zinc-800 p-2 text-center">
                        <div className="text-xs text-zinc-400">Basic</div>
                        <div className="font-medium">$99</div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="mt-2 w-full text-xs"
                          onClick={() => addToCart({ id: 2, name: "Website Speed Optimization (Basic)", price: 99 })}
                        >
                          Add
                        </Button>
                      </div>
                      <div className="rounded-md border border-blue-900 bg-zinc-800 p-2 text-center">
                        <div className="text-xs text-blue-400">Standard</div>
                        <div className="font-medium">$199</div>
                        <Button
                          size="sm"
                          className="mt-2 w-full text-xs bg-blue-600 hover:bg-blue-700"
                          onClick={() =>
                            addToCart({ id: 3, name: "Website Speed Optimization (Standard)", price: 199 })
                          }
                        >
                          Add
                        </Button>
                      </div>
                      <div className="rounded-md border border-zinc-800 p-2 text-center">
                        <div className="text-xs text-zinc-400">Premium</div>
                        <div className="font-medium">$299</div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="mt-2 w-full text-xs"
                          onClick={() => addToCart({ id: 4, name: "Website Speed Optimization (Premium)", price: 299 })}
                        >
                          Add
                        </Button>
                      </div>
                    </div>
                    <button className="flex w-full items-center justify-center gap-1 mt-3 text-sm text-zinc-400">
                      What's included <ChevronDown className="h-4 w-4" />
                    </button>
                  </CardContent>
                </Card>
                {/* More service cards would go here */}
              </div>
            </TabsContent>

            <TabsContent value="addons" className="mt-6">
              <Card className="border-zinc-800 bg-zinc-900">
                <CardHeader>
                  <CardTitle>Add-Ons</CardTitle>
                  <CardDescription className="text-zinc-400">
                    Enhance your services with these powerful add-ons
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border border-zinc-800">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-zinc-800 bg-zinc-800/50">
                          <th className="p-3 text-left font-medium">Add-On</th>
                          <th className="p-3 text-left font-medium">Description</th>
                          <th className="p-3 text-left font-medium">Price</th>
                          <th className="p-3 text-left font-medium"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-zinc-800">
                          <td className="p-3 font-medium">Weekly Backup</td>
                          <td className="p-3 text-sm text-zinc-400">Auto backup your website weekly</td>
                          <td className="p-3">$99/mo</td>
                          <td className="p-3">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => addToCart({ id: 14, name: "Weekly Backup", price: 99 })}
                            >
                              Add
                            </Button>
                          </td>
                        </tr>
                        <tr className="border-b border-zinc-800">
                          <td className="p-3 font-medium">Analytics Dashboard</td>
                          <td className="p-3 text-sm text-zinc-400">Visualize speed, SEO, uptime</td>
                          <td className="p-3">$149</td>
                          <td className="p-3">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => addToCart({ id: 15, name: "Analytics Dashboard", price: 149 })}
                            >
                              Add
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Extra Support 5H</td>
                          <td className="p-3 text-sm text-zinc-400">Get 5 more hours/month</td>
                          <td className="p-3">$249</td>
                          <td className="p-3">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => addToCart({ id: 16, name: "Extra Support 5H", price: 249 })}
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
        </main>
      </div>

      {/* Right Sidebar - Cart */}
      <div className="hidden md:block w-80 lg:w-96 border-l border-zinc-800 bg-zinc-950">
        <div className="sticky top-0 h-screen overflow-auto p-4">
          <div className="mb-4 flex items-center">
            <ShoppingCart className="mr-2 h-5 w-5" />
            <h2 className="text-lg font-semibold">Your Cart</h2>
          </div>

          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <ShoppingCart className="h-10 w-10 text-zinc-600 mb-3" />
              <p className="text-sm text-zinc-400">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-zinc-400">${item.price}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => removeFromCart(item.id)}>
                    <Trash className="h-4 w-4" />
                    <span className="sr-only">Remove</span>
                  </Button>
                </div>
              ))}

              <div className="pt-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-400">Subtotal</span>
                  <span>${cartItems.reduce((total, item) => total + item.price, 0)}</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-zinc-400">Discount</span>
                  <span className="text-green-400">-$0</span>
                </div>
                <Separator className="my-3 bg-zinc-800" />
                <div className="flex items-center justify-between font-medium">
                  <span>Total</span>
                  <span>${cartItems.reduce((total, item) => total + item.price, 0)}</span>
                </div>
              </div>

              <Button className="w-full mt-4 bg-white text-black hover:bg-zinc-200">Checkout</Button>
            </div>
          )}

          <div className="mt-8">
            <h3 className="text-sm font-medium mb-3">Suggested for you</h3>
            <div className="space-y-3">
              <Card className="overflow-hidden border-zinc-800 bg-zinc-900">
                <div className="flex p-3">
                  <div className="rounded-full bg-amber-900 p-2 mr-3">
                    <Star className="h-4 w-4 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">Analytics Dashboard</h4>
                    <p className="text-xs text-zinc-400">Perfect with your current plan</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm font-medium">$149</span>
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-7 text-xs"
                        onClick={() => addToCart({ id: 15, name: "Analytics Dashboard", price: 149 })}
                      >
                        Add
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border-zinc-800 bg-zinc-900">
                <div className="flex p-3">
                  <div className="rounded-full bg-purple-900 p-2 mr-3">
                    <Gift className="h-4 w-4 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">Weekly Backup</h4>
                    <p className="text-xs text-zinc-400">32 users bought this last week</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm font-medium">$99/mo</span>
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-7 text-xs"
                        onClick={() => addToCart({ id: 14, name: "Weekly Backup", price: 99 })}
                      >
                        Add
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      {/* Add a mobile cart drawer for small screens */}
      {/* Add this at the end of the component, just before the final closing div */}
      {/* Mobile Cart Drawer */}
      <div className="md:hidden">
        <div className="fixed bottom-4 right-4 z-50">
          <Button className="h-14 w-14 rounded-full shadow-lg relative bg-blue-600 hover:bg-blue-700">
            <ShoppingCart className="h-6 w-6" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs text-black font-medium">
                {cartItems.length}
              </span>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
